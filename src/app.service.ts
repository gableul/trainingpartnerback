import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDate() : string {
    return 'DD/MM/YYYY';
  }
}
