import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { P012Service } from './p012.service';
import { CreateP012Dto } from './dto/create-p012.dto';
import { UpdateP012Dto } from './dto/update-p012.dto';

@Controller('P012')
export class P012Controller {
  constructor(private readonly p012Service: P012Service) {}

  @Get('/getAllGalerias')
  findAll() {
    return this.p012Service.findAll();
  }

  @Delete('/delete_Galeria/:id')
  remove(@Param('id') id: string) {
    return this.p012Service.remove(+id);
  }
}
