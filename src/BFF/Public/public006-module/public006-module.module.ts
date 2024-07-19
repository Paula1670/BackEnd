import { Module } from '@nestjs/common';
import { Public006Controller } from './public006-module.controller';
import { Public006Service } from './public006-module.service';

@Module({
  controllers: [Public006Controller],
  providers: [Public006Service],
})
export class Public006Module {}
