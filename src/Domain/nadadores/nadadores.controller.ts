import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NadadoresService } from './nadadores.service';
import { CreateNadadorDto } from './dto/create-nadador.dto';
import { UpdateNadadoreDto } from './dto/update-nadadore.dto';
import { ActualizarCategoriaDeNadadorDto } from './dto/actualizarCategoriaDeNadador.dto';
import { ActualizarEntrenadorDeNadadorDto } from './dto/actualizarEntrenadorDeNadador.dto';

@Controller('nadadores')
export class NadadoresController {
  constructor(private readonly nadadoresService: NadadoresService) {}

  @Post('/create')
  create(@Body() createNadadorDto: CreateNadadorDto) {
    return this.nadadoresService.create(createNadadorDto);
  }

  @Get('/getAll')
  findAll() {
    return this.nadadoresService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.nadadoresService.findOne(+id);
  }

 /* @Get('/findNadadorByUserId/:id')
  findNadadorByUserId(@Param('id') id: string) {
    return this.nadadoresService.findNadadorByUserId(+id);
  }*/

  @Patch('/edit/:id')
  update(
    @Param('id') id: string,
    @Body() updateNadadoreDto: UpdateNadadoreDto,
  ) {
    return this.nadadoresService.update(+id, updateNadadoreDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.nadadoresService.remove(+id);
  }

  @Put('/actualizarEntrenadorDeNadador')
  actualizarEntrenadorDeNadador(
    @Body() actualizarEntrenadorDeNadador: ActualizarEntrenadorDeNadadorDto,
  ) {
    return this.nadadoresService.actualizarEntrenadorDeNadador(
      actualizarEntrenadorDeNadador.idNadador,
      actualizarEntrenadorDeNadador.idEntrenador,
    );
  }

  @Put('/actualizarCategoriaDeNadador')
  actualizarCategoriaDeNadador(
    @Body() actualizarCategoriaDeNadador: ActualizarCategoriaDeNadadorDto,
  ) {
    return this.nadadoresService.actualizarCategoriaDeNadador(
      actualizarCategoriaDeNadador.idNadador,
      actualizarCategoriaDeNadador.idCategoria,
    );
  }
}
