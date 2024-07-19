import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Public006Service } from './public006-module.service';

@Controller('P006')
export class Public006Controller {
  constructor(private readonly p006Service: Public006Service) {}

  @Get('/Get_Records')
  findAll() {
    return this.p006Service.Get_Records();
  }
}
