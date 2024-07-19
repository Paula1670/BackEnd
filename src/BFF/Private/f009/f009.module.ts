import { Module } from '@nestjs/common';
import { F009Service } from './f009.service';
import { F009Controller } from './f009.controller';

@Module({
  controllers: [F009Controller],
  providers: [F009Service],
})
export class F009Module {}
