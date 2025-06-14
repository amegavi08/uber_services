import { Inject, Injectable } from '@nestjs/common';
import { CreateRiderCoordinateDto } from './dto/createCoordinate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schema/rider-coordinate.schema';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {

    constructor(
        @InjectModel(RiderCoordinate.name) 
        private readonly riderCoordinateModel: Model <RiderCoordinate>,
        @Inject('RIDER_SERVICE') private client: ClientProxy
    ) {}

    async getAllRiderCoordinates(riderId: string) {
        const coordinate =  await this.riderCoordinateModel.find({rider: riderId});
        const pattern = {cmd: 'get-rider'};
        const payload = {id: riderId};
        const rider = await firstValueFrom(this.client.send( pattern, payload));
        return { coordinate, rider };
    }

    async createRiderCoordinate(createRiderCoordinateDto: CreateRiderCoordinateDto) {
        return await this.riderCoordinateModel.create(createRiderCoordinateDto);
    }

}
