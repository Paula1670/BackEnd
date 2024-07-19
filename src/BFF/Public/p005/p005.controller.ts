import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { P005Service } from './p005.service';
import { CreateP005Dto } from './dto/create-p005.dto';
import { UpdateP005Dto } from './dto/update-p005.dto';

@Controller('p005')
export class P005Controller {
  constructor(private readonly p005Service: P005Service) {}

  @Get('/getAll')
  findAll() {
    return this.p005Service.findAll();
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.p005Service.remove(+id);
  }

  @Get('/getAllEsp')
  findAllEsp() {
    return this.p005Service.findAllEsp();
  }

  @Get('/getAllAnd')
  findAllAnd() {
    return this.p005Service.findAllAnd();
  }

  @Get('/getAllOtros')
  findAllOtros() {
    return this.p005Service.findAllOtros();
  }

  @Get('/getAllEstatutos')
  findAllEstatutos() {
    return this.p005Service.findAllEstatutos();
  }
}
