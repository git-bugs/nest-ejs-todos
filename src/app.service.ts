import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMain(): object {
    return { title: 'Nest Ejs Todos App' };
  }
}
