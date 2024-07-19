import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { F012Service } from './f012.service';
import { CreateF012Dto } from './dto/create-f012.dto';
import { UpdateF012Dto } from './dto/update-f012.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('F012')
export class F012Controller {
  constructor(private readonly f012Service: F012Service) {}

  @Post('/create_Galeria')
  create_Galeria(@Body() body: any) {
    return this.f012Service.create_Galeria(body);
  }

  @Patch('/edit_Galeria/:id')
  update_Galeria(
    @Param('id') id: string,
    @Body() updateF012Dto: UpdateF012Dto,
  ) {
    return this.f012Service.update_Galeria(+id, updateF012Dto);
  }
}
