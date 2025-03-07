import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloPermaneo(): string {
    return 'Hello Permaneo!';
  }
}
