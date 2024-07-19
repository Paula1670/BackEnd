import { Module } from '@nestjs/common';
import { F006Service } from './f006.service';
import { F006Controller } from './f006.controller';

@Module({
  controllers: [F006Controller],
  providers: [F006Service],
})
export class F006Module {}
