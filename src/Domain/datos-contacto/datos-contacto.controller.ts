import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DatosContactoService } from './datos-contacto.service';
import { CreateDatosContactoDto } from './dto/create-datos-contacto.dto';
import { UpdateDatosContactoDto } from './dto/update-datos-contacto.dto';

@Controller('datosContacto')
export class DatosContactoController {
  constructor(private readonly datosContactoService: DatosContactoService) {}

  @Post('create')
  create(@Body() createDatosContactoDto: CreateDatosContactoDto) {
    return this.datosContactoService.create(createDatosContactoDto);
  }

  @Get('getAll')
  findAll() {
    return this.datosContactoService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.datosContactoService.findOne(+id);
  }

  @Patch('edit/:id')
  update(
    @Param('id') id: string,
    @Body() updateDatosContactoDto: UpdateDatosContactoDto,
  ) {
    return this.datosContactoService.update(+id, updateDatosContactoDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.datosContactoService.remove(+id);
  }
}
