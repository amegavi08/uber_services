import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRiderCoordinateDto {

  @IsString()
  @IsNotEmpty()
  riderId: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

}