import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EntrenadoresService } from './entrenadores.service';
import { CreateEntrenadoreDto } from './dto/create-entrenadore.dto';
import { UpdateEntrenadoreDto } from './dto/update-entrenadore.dto';

@Controller('entrenadores')
export class EntrenadoresController {
  constructor(private readonly entrenadoresService: EntrenadoresService) {}

  @Post('/create')
  create(@Body() createEntrenadoreDto: CreateEntrenadoreDto) {
    return this.entrenadoresService.create(createEntrenadoreDto);
  }

  @Get('/getAll')
  findAll() {
    return this.entrenadoresService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.entrenadoresService.findOne(+id);
  }

  @Patch('/edit/:id')
  update(
    @Param('id') id: string,
    @Body() updateEntrenadoreDto: UpdateEntrenadoreDto,
  ) {
    return this.entrenadoresService.update(+id, updateEntrenadoreDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.entrenadoresService.remove(+id);
  }
}
