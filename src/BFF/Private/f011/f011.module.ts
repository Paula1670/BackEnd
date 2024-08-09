import { Module } from '@nestjs/common';
import { F011Service } from './f011.service';
import { F011Controller } from './f011.controller';

@Module({
  controllers: [F011Controller],
  providers: [F011Service],
})
export class F011Module {}
