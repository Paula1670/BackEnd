import { Module } from '@nestjs/common';
import { F007Service } from './f007.service';
import { F007Controller } from './f007.controller';

@Module({
  controllers: [F007Controller],
  providers: [F007Service],
})
export class F007Module {}
