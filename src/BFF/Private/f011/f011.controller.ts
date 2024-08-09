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

@Controller('F011')
export class F011Controller {
  constructor(private readonly f011Service: F011Service) {}

  @Get('/Find_User/:id')
  Find_User(@Param('id') id: string) {
    return this.f011Service.Find_User(+id);
  }

  @Put('/actualizarCategoriaDeNadador')
  actualizarCategoriaDeNadador(
    @Body() actualizarCategoriaDeNadadorDto: ActualizarCategoriaDeNadadorDto,
  ) {
    console.log('hola');
    return this.f011Service.actualizarCategoriaDeNadador(
      actualizarCategoriaDeNadadorDto.idNadador,
      actualizarCategoriaDeNadadorDto.idCategoria,
    );
  }

  @Get('/findCategorias')
  findCategorias() {
    return this.f011Service.findCategorias();
  }
}
