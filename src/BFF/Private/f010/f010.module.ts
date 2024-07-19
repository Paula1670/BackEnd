import { Module } from '@nestjs/common';
import { F010Service } from './f010.service';
import { F010Controller } from './f010.controller';

@Module({
  controllers: [F010Controller],
  providers: [F010Service],
})
export class F010Module {}
