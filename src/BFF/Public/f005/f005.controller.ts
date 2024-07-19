import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { F005Service } from './f005.service';
import { CreateF005Dto } from './dto/create-f005.dto';
import { UpdateF005Dto } from './dto/update-f005.dto';

@Controller('F005')
export class F005Controller {
  constructor(private readonly f005Service: F005Service) {}

  @Post('/create')
  create(@Body() createF005Dto: CreateF005Dto) {
    return this.f005Service.create(createF005Dto);
  }
  @Patch('/edit/:id')
  update(@Param('id') id: string, @Body() updateF005Dto: UpdateF005Dto) {
    return this.f005Service.update(+id, updateF005Dto);
  }

  @Get('/Find_Documento/:id')
  findOne(@Param('id') id: string) {
    return this.f005Service.Find_Documento(+id);
  }
}
