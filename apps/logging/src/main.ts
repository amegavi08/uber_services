import { NestFactory } from '@nestjs/core';
import { LoggingModule } from './logging.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(LoggingModule);
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
    })
  )


  const Swagconfig = new DocumentBuilder()
    .setTitle('Logging Backend EndPoint')
    .setDescription('')
    .setVersion('1.0')
    .addBearerAuth(undefined, 'defaultBearerAuth')
    .build();
  const document = SwaggerModule.createDocument(app, Swagconfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.port ?? 3002);

}
bootstrap();
