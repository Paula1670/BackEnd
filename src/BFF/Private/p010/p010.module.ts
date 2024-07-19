import { Module } from '@nestjs/common';
import { P010Service } from './p010.service';
import { P010Controller } from './p010.controller';

@Module({
  controllers: [P010Controller],
  providers: [P010Service],
})
export class P010Module {}
