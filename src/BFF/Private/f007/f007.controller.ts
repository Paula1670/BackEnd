import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { F007Service } from './f007.service';
import { F007Create_MinimaDto } from './dto/F007Create_MinimaDto';
import { F007Editar_MinimaDto } from './dto/F007Editar_MinimaDto';

@Controller('F007')
export class F007Controller {
  constructor(private readonly f007Service: F007Service) {}

  @Post('/Create_Minima')
  Create_Minima(@Body() createF007Dto: F007Create_MinimaDto) {
    return this.f007Service.Create_Minima(createF007Dto);
  }

  @Get('/Find_Minima/:id')
  Find_Minima(@Param('id') id: string) {
    return this.f007Service.Find_Minima(+id);
  }

  @Patch('/Editar_Minima/:id')
  Editar_Minima(@Param('id') id: string, @Body() update: F007Editar_MinimaDto) {
    return this.f007Service.Editar_Minima(+id, update);
  }

  @Get('/findCategorias')
  findCategorias() {
    return this.f007Service.findCategorias();
  }
}
