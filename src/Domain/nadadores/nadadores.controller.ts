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

  @Put('/actualizarCategoriaDeNadador')
  actualizarCategoriaDeNadador(
    @Body() actualizarCategoriaDeNadadorDto: ActualizarCategoriaDeNadadorDto,
  ) {
    return this.nadadoresService.actualizarCategoriaDeNadador(
      actualizarCategoriaDeNadadorDto.idNadador,
      actualizarCategoriaDeNadadorDto.idCategoria,
    );
  }
}
