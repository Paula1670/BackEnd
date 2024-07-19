import { Module } from '@nestjs/common';
import { P012Service } from './p012.service';
import { P012Controller } from './p012.controller';

@Module({
  controllers: [P012Controller],
  providers: [P012Service],
})
export class P012Module {}
