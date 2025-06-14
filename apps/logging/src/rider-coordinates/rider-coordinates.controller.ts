import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRiderCoordinateDto } from './dto/createCoordinate.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rider Coordinates')
@Controller('rider-coordinates')
export class RiderCoordinatesController {


    @Get()
    async getCoordinates() {
        return 'Hello World! this is the Rider Coordinates Service.';
    }

    @Post()
    async createCoordinate(
        @Body() createRiderCoordinateDto: CreateRiderCoordinateDto
    ) {
        return createRiderCoordinateDto;
    }

}
