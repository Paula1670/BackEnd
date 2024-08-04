import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TiemposService } from './tiempos.service';
import { CreateTiempoDto } from './dto/create-tiempo.dto';
import { UpdateTiempoDto } from './dto/update-tiempo.dto';
import { FiltrosTiempoDto } from './dto/filtros_Tiempo.dto';
import { TiempoDto } from './dto/tiempo.dto';

@Controller('tiempos')
export class TiemposController {
  constructor(private readonly tiemposService: TiemposService) {}

  @Post('/create')
  create(@Body() createTiempoDto: CreateTiempoDto) {
    return this.tiemposService.create(createTiempoDto);
  }

  @Get('/getAll')
  findAll() {
    return this.tiemposService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.tiemposService.findOne(+id);
  }

  @Get('/findAllByNadador/:id')
  findAllByNadador(@Param('id') id: string) {
    return this.tiemposService.findAllByNadador(+id);
  }

  @Get('/obtenerMenorTiempoPorFiltros')
  async obtenerMenorTiempoPorFiltros(): Promise<any[]> {
    return this.tiemposService.obtenerMenorTiempoPorFiltros();
  }

  @Post('/findTiemposByFilters')
  async findTiemposByFilters(
    @Body() filtrosTiempoDto: FiltrosTiempoDto,
  ): Promise<TiempoDto[]> {
    return this.tiemposService.findTiemposByFilters(filtrosTiempoDto);
  }

  @Patch('/edit/:id')
  update(@Param('id') id: string, @Body() updateTiempoDto: UpdateTiempoDto) {
    return this.tiemposService.update(+id, updateTiempoDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.tiemposService.remove(+id);
  }
}
