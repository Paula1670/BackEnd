import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get('/getAll')
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(+id);
  }

  @Get('/findCategoriaByNadador/:id')
  findCategoriaByNadador(@Param('id') id: string) {
    return this.categoriaService.findCategoriaByNadador(+id);
  }

  @Patch('/edit/:id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }
}
