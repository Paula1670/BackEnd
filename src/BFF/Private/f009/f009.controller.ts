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
import { F009Service } from './f009.service';
import { F009Create_UserDto } from './dto/create-f009.dto';
import { F009Editar_UserDto } from './dto/update-f009.dto';
import { ActualizarCategoriaDeNadadorDto } from '../p009/dto/P009actualizarCategoriaDeNadador.dto';

@Controller('F009')
export class F009Controller {
  constructor(private readonly f009Service: F009Service) {}

  @Post('/Create_User')
  Create_User(@Body() createF009Dto: F009Create_UserDto) {
    return this.f009Service.Create_User(createF009Dto);
  }

  @Get('/Find_User/:id')
  Find_User(@Param('id') id: string) {
    return this.f009Service.Find_User(+id);
  }

  @Patch('/Editar_User/:id')
  Editar_User(
    @Param('id') id: string,
    @Body() updateP009Dto: F009Editar_UserDto,
  ) {
    return this.f009Service.Editar_User(+id, updateP009Dto);
  }

  @Get('/findCuotas')
  findCuotas() {
    return this.f009Service.findCuotas();
  }

  @Get('/findSocios')
  findSocios() {
    return this.f009Service.findSocios();
  }

  @Get('/findNadadores')
  findNadadores() {
    return this.f009Service.findNadadores();
  }

  @Get('/findEntrenadores')
  findEntrenadores() {
    return this.f009Service.findEntrenadores();
  }

  @Put('/actualizarCategoriaDeNadador')
  actualizarCategoriaDeNadador(
    @Body() actualizarCategoriaDeNadadorDto: ActualizarCategoriaDeNadadorDto,
  ) {
    return this.f009Service.actualizarCategoriaDeNadador(
      actualizarCategoriaDeNadadorDto.idNadador,
      actualizarCategoriaDeNadadorDto.idCategoria,
    );
  }

  @Get('/findNadadoresByEntrenador/:id')
  findNadadoresByEntrenador(@Param('id') id: string) {
    return this.f009Service.findNadadoresByEntrenador(+id);
  }
}
