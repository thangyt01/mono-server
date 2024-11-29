import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/_healthcheck')
  health() {
    return process.env['VERSION_TAG'] || '';
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
