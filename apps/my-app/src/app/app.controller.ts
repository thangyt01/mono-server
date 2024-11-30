import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { common } from '@my-app/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/_healthcheck')
  health() {
    return process.env['VERSION_TAG'] || '';
  }

  @Get()
  getData() {
    common();
    return this.appService.getData();
  }
}
