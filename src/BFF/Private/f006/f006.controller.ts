import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { F006Service } from './f006.service';
import { F006Create_TiempoDto } from './dto/F006Create_TiempoDto';
import { F006Editar_TiempoDto } from './dto/F006Editar_TiempoDto';

@Controller('f006')
export class F006Controller {
  constructor(private readonly f006Service: F006Service) {}

  @Post('Create_Tiempo')
  Create_Tiempo(@Body() createF006Dto: F006Create_TiempoDto) {
    return this.f006Service.Create_Tiempo(createF006Dto);
  }

  @Get('Find_Tiempo/:id')
  findOne(@Param('id') id: string) {
    return this.f006Service.Get_Tiempo(+id);
  }

  @Patch('Editar_Tiempo/:id')
  Editar_Tiempo(
    @Param('id') id: string,
    @Body() updatef006Dto: F006Editar_TiempoDto,
  ) {
    return this.f006Service.Editar_Tiempo(+id, updatef006Dto);
  }
}
