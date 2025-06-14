import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRiderCoordinateDto } from './dto/createCoordinate.dto';
import { ApiTags } from '@nestjs/swagger';
import { RiderCoordinatesService } from './rider-coordinates.service';

@ApiTags('Rider Coordinates')
@Controller('rider-coordinates')
export class RiderCoordinatesController {

    constructor(private readonly riderCoordinatesService: RiderCoordinatesService) {
        // Constructor logic if needed
    }

    @Get(":id")
    async getCoordinates(
        @Param('id') id: string
    ) {
        return await this.riderCoordinatesService.getAllRiderCoordinates(id)
    }

    @Post()
    async createCoordinate(
        @Body() createRiderCoordinateDto: CreateRiderCoordinateDto
    ) {
        return await this.riderCoordinatesService.createRiderCoordinate(createRiderCoordinateDto);
    }

}
