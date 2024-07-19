import { Module } from '@nestjs/common';
import { F004Service } from './f004.service';
import { F004Controller } from './f004.controller';

@Module({
  controllers: [F004Controller],
  providers: [F004Service],
})
export class F004Module {}
