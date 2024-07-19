import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { F004Service } from './f004.service';
import { F004Create_CuotaDto } from './dto/create-f004.dto';
import { F004Update_CuotaDto } from './dto/update-f004.dto';

@Controller('F004')
export class F004Controller {
  constructor(private readonly f004Service: F004Service) {}

  @Post('Create_Cuota')
  Create_Cuota(@Body() createF004Dto: F004Create_CuotaDto) {
    return this.f004Service.Create_Cuota(createF004Dto);
  }

  @Get('/Find_Cuota/:id')
  findOne(@Param('id') id: string) {
    return this.f004Service.Get_Cuota(+id);
  }

  @Patch('/Editar_Cuota/:id')
  Editar_Cuota(
    @Param('id') id: string,
    @Body() updatef004Dto: F004Update_CuotaDto,
  ) {
    return this.f004Service.Editar_Cuota(+id, updatef004Dto);
  }
}
