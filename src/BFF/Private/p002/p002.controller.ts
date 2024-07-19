import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { P002Service } from './p002.service';
import { CreateP002Dto } from './dto/create-p002.dto';
import { UpdateP002Dto } from './dto/update-p002.dto';

@Controller('p002')
export class P002Controller {
  constructor(private readonly p002Service: P002Service) {}

  @Post()
  create(@Body() createP002Dto: CreateP002Dto) {
    return this.p002Service.create(createP002Dto);
  }

  @Get()
  findAll() {
    return this.p002Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.p002Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateP002Dto: UpdateP002Dto) {
    return this.p002Service.update(+id, updateP002Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.p002Service.remove(+id);
  }
}
