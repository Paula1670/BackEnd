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
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('users')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('/create')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get('/findAllActivated')
  findAllActivated() {
    return this.usuarioService.findAllActivated();
  }

  @Get('/findAllInactivated')
  findAllInactivated() {
    return this.usuarioService.findAllInactivated();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch('/edit/:id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usuarioService.desactivate(+id);
  }

  @Put('/activate/:id')
  activate(@Param('id') id: string) {
    return this.usuarioService.activate(+id);
  }

  @Get('/findUserBySocioId/:id')
  findUserBySocioId(@Param('id') id: string) {
    return this.usuarioService.findUserBySocioId(+id);
  }

  @Get('/findUserByNadadorId/:id')
  findUserByNadadorId(@Param('id') id: string) {
    return this.usuarioService.findUserByNadadorId(+id);
  }

  /* @Get('/findNadadorBySocioId/:id')
  findNadadorByUserId(@Param('id') id: string) {
    return this.usuarioService.findNadadorByUserId(+id);
  }*/

  @Get('/findUserByEntrenadorId/:id')
  findUserByEntrenadorId(@Param('id') id: string) {
    return this.usuarioService.findUserByEntrenadorId(+id);
  }

  @Get('/findUsersSocios')
  findUsersSocios() {
    return this.usuarioService.findUsersSocios();
  }

  @Get('/findUsersEntrenadores')
  findUsersEntrenadores() {
    return this.usuarioService.findUsersEntrenadores();
  }

  @Get('/findUsersNadadores')
  findUsersNadadores() {
    return this.usuarioService.findUsersNadadores();
  }
}
