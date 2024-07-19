import { Module } from '@nestjs/common';
import { F005Service } from './f005.service';
import { F005Controller } from './f005.controller';

@Module({
  controllers: [F005Controller],
  providers: [F005Service],
})
export class F005Module {}
