import { Module } from '@nestjs/common';
import { P006Service } from './p006.service';
import { P006Controller } from './p006.controller';

@Module({
  controllers: [P006Controller],
  providers: [P006Service],
})
export class P006Module {}
