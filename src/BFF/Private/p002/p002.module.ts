import { Module } from '@nestjs/common';
import { P002Service } from './p002.service';
import { P002Controller } from './p002.controller';

@Module({
  controllers: [P002Controller],
  providers: [P002Service],
})
export class P002Module {}
