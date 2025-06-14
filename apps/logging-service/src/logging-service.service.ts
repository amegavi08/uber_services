import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggingServiceService {
  getHello(): string {
    return 'Hello there! This is the Logging Service.';
  }
}
