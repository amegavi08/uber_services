import { Module } from '@nestjs/common';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { RiderCoordinatesController } from './rider-coordinates.controller';

@Module({
  providers: [RiderCoordinatesService],
  controllers: [RiderCoordinatesController]
})
export class RiderCoordinatesModule {}
