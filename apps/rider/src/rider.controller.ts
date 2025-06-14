import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { ApiTags } from '@nestjs/swagger';
import { MessagePattern } from '@nestjs/microservices';

@ApiTags('Rider')
@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  // @Get(':id')
  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(
    // @Param('id') id: string
    data: any
  ) {
    return Promise.resolve({
      _id: data.id,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com' 
    });
  }
}
