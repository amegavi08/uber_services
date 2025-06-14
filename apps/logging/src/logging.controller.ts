import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoggingService } from './logging.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Logging')
@Controller('logging')
export class LoggingController {
  constructor(private readonly loggingService: LoggingService) { }

  @Get()
  getHello(): string {
    return this.loggingService.getHello();
  }

  }
