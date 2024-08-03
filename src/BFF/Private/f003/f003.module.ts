import { Module } from '@nestjs/common';
import { F003Service } from './f003.service';
import { F003Controller } from './f003.controller';

@Module({
  controllers: [F003Controller],
  providers: [F003Service],
})
export class F003Module {}
