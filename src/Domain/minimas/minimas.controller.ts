import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MinimasService } from './minimas.service';
import { CreateMinimaDto } from './dto/create-minima.dto';
import { UpdateMinimaDto } from './dto/update-minima.dto';
import { FiltrosMinimaDto } from './dto/filtros_minima.dto';

@Controller('minimas')
export class MinimasController {
  constructor(private readonly minimasService: MinimasService) {}

  @Post('/create')
  create(@Body() createMinimaDto: CreateMinimaDto) {
    return this.minimasService.create(createMinimaDto);
  }

  @Get('/getAll')
  findAll() {
    return this.minimasService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.minimasService.findOne(+id);
  }

  @Post('/findMinimasByFilters')
  findMinimasByFilters(@Body() filtro: FiltrosMinimaDto) {
    return this.minimasService.findMinimasByFilters(filtro);
  }

  @Patch('/edit/:id')
  update(@Param('id') id: string, @Body() updateMinimaDto: UpdateMinimaDto) {
    return this.minimasService.update(+id, updateMinimaDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.minimasService.remove(+id);
  }

  @Get('/findMinimasByAno/:year')
  findMinimasByAno(@Param('year') year: number) {
    return this.minimasService.findMinimasByAno(+year);
  }

  @Get('/findMinimasByCategoria/:categoria')
  findMinimasByCategoria(@Param('categoria') categoria: number) {
    return this.minimasService.findAllByCategoria(+categoria);
  }
}
