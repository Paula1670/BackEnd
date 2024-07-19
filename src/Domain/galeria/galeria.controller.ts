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
import { GaleriaService } from './galeria.service';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('galeria')
export class GaleriaController {
  constructor(private readonly galeriaService: GaleriaService) {}

  @Post('/create')
  create(@Body() body: CreateGaleriaDto) {
    return this.galeriaService.create(body);
  }

  @Get('/getAll')
  findAll() {
    return this.galeriaService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.galeriaService.findOne(+id);
  }

  @Patch('/edit/:id')
  update(@Param('id') id: string, @Body() updateGaleriaDto: UpdateGaleriaDto) {
    return this.galeriaService.update(+id, updateGaleriaDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.galeriaService.remove(+id);
  }
}
