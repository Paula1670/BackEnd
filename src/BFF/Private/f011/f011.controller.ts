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
import { F011Service } from './f011.service';
import { CreateF011Dto } from './dto/create-f011.dto';
import { UpdateF011Dto } from './dto/update-f011.dto';
import { ActualizarCategoriaDeNadadorDto } from './dto/F011actualizarCategoriaDeNadador.dto';
import { ActualizarEntrenadorDeNadadorDto } from './dto/actualizarEntrenadorDeNadador.dto';

@Controller('F011')
export class F011Controller {
  constructor(private readonly f011Service: F011Service) {}

  @Get('/Find_User/:id')
  Find_User(@Param('id') id: string) {
    return this.f011Service.Find_User(+id);
  }

  @Get('/Find_Nadador/:id')
  Find_Nadador(@Param('id') id: string) {
    return this.f011Service.Find_Nadador(+id);
  }

  @Put('/actualizarCategoriaDeNadador')
  actualizarCategoriaDeNadador(
    @Body() actualizarCategoriaDeNadadorDto: ActualizarCategoriaDeNadadorDto,
  ) {
    return this.f011Service.actualizarCategoriaDeNadador(
      actualizarCategoriaDeNadadorDto.idNadador,
      actualizarCategoriaDeNadadorDto.idCategoria,
    );
  }

  @Put('/actualizarEntrenadorDeNadador')
  actualizarEntrenadorDeNadador(
    @Body() actualizarEntrenadorDeNadador: ActualizarEntrenadorDeNadadorDto,
  ) {
    return this.f011Service.actualizarEntrenadorDeNadador(
      actualizarEntrenadorDeNadador.idNadador,
      actualizarEntrenadorDeNadador.idEntrenador,
    );
  }

  @Get('/findCategorias')
  findCategorias() {
    return this.f011Service.findCategorias();
  }
  @Get('/findEntrenadores')
  findEntrenadores() {
    return this.f011Service.findEntrenadores();
  }
}
