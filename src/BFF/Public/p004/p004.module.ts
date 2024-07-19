import { Module } from '@nestjs/common';
import { P004Service } from './p004.service';
import { P004Controller } from './p004.controller';

@Module({
  controllers: [P004Controller],
  providers: [P004Service],
})
export class P004Module {}
