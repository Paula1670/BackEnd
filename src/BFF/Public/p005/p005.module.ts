import { Module } from '@nestjs/common';
import { P005Service } from './p005.service';
import { P005Controller } from './p005.controller';

@Module({
  controllers: [P005Controller],
  providers: [P005Service],
})
export class P005Module {}
