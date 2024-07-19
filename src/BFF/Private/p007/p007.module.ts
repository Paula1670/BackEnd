import { Module } from '@nestjs/common';
import { P007Service } from './p007.service';
import { P007Controller } from './p007.controller';

@Module({
  controllers: [P007Controller],
  providers: [P007Service],
})
export class P007Module {}
