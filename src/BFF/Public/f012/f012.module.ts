import { Module } from '@nestjs/common';
import { F012Service } from './f012.service';
import { F012Controller } from './f012.controller';

@Module({
  controllers: [F012Controller],
  providers: [F012Service],
})
export class F012Module {}
