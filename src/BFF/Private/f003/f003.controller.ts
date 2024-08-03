import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { F003Service } from './f003.service';
import { UpdateF003Dto } from './dto/update-f003.dto';
import { F003Create_MiembroJuntaDto } from './dto/create-f003.dto';

@Controller('F003')
export class F003Controller {
  constructor(private readonly f003Service: F003Service) {}

  @Post('/create/:id')
  create(
    @Body() createF003Dto: F003Create_MiembroJuntaDto,
    @Param('id') id: string,
  ) {
    return this.f003Service.Create_MiembroJunta(createF003Dto, +id);
  }

  @Get('/findById/:id')
  findOne(@Param('id') id: string) {
    return this.f003Service.Find_MiembroJunta(+id);
  }

  @Get('/findUsuarios')
  findUsuarios() {
    return this.f003Service.findUsuarios();
  }

  @Patch('/edit/:id')
  update(@Param('id') id: string, @Body() updateF003Dto: UpdateF003Dto) {
    return this.f003Service.Editar_MiembroJunta(+id, updateF003Dto);
  }
}
