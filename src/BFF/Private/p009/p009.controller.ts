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
import { P009Service } from './p009.service';
import { ActualizarCategoriaDeNadadorDto } from './dto/P009actualizarCategoriaDeNadador.dto';

@Controller('P009')
export class P009Controller {
  constructor(private readonly p009Service: P009Service) {}

  @Get('/Get_UsersActivated')
  Get_UsersActivated() {
    return this.p009Service.Get_UsersActivated();
  }

  @Get('/Get_UsersInactivated')
  Get_UsersInactivated() {
    return this.p009Service.Get_UsersInactivated();
  }

  @Delete('/Delete_User/:id')
  Delete_User(@Param('id') id: string) {
    return this.p009Service.Delete_User(+id);
  }

  @Delete('/Delete_MiembroJunta/:id')
  Delete_MiembroJunta(@Param('id') id: string) {
    return this.p009Service.Delete_MiembroJunta(+id);
  }

  @Put('/Activate_User/:id')
  Activate_User(@Param('id') id: string) {
    return this.p009Service.Activate_User(+id);
  }

  @Get('/findById/:id')
  FindById(@Param('id') id: string) {
    return this.p009Service.FindById(+id);
  }

  @Get('/findAllSocios')
  findAllSocios() {
    return this.p009Service.findAllSocios();
  }

  @Get('/findAllEntrenadores')
  findAllEntrenadores() {
    return this.p009Service.findAllEntrenadores();
  }

  @Get('/findAllJunta')
  findAllJunta() {
    return this.p009Service.findAllJunta();
  }

  @Get('/findAllNadadores')
  findAllNadadores() {
    return this.p009Service.findAllNadadores();
  }

  @Put('/actualizarCategoriaDeNadador')
  actualizarCategoriaDeNadador(
    @Body() actualizarCategoriaDeNadadorDto: ActualizarCategoriaDeNadadorDto,
  ) {
    return this.p009Service.actualizarCategoriaDeNadador(
      actualizarCategoriaDeNadadorDto.idNadador,
      actualizarCategoriaDeNadadorDto.idCategoria,
    );
  }

  @Put('/actualizarAllCategorias')
  actualizarAllCategorias() {
    return this.p009Service.actualizarAllCategorias();
  }
}
