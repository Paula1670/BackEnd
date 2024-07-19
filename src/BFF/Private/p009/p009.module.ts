import { Module } from '@nestjs/common';
import { P009Service } from './p009.service';
import { P009Controller } from './p009.controller';

@Module({
  controllers: [P009Controller],
  providers: [P009Service],
})
export class P009Module {}
