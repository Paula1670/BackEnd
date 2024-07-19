import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { F010Service } from './f010.service';
import { F010CreateContratoDto } from './dto/create-f010.dto';
import { F010EditarContratoDto } from './dto/update-f010.dto';

@Controller('F010')
export class F010Controller {
  constructor(private readonly f010Service: F010Service) {}

  @Post('Create_Contrato')
  Create_Contrato(@Body() createF010Dto: F010CreateContratoDto) {
    return this.f010Service.Create_Contrato(createF010Dto);
  }

  @Get('/Get_Contrato/:id')
  Get_Contrato(@Param('id') id: string) {
    return this.f010Service.Find_Contrato(+id);
  }

  @Patch('Editar_Contrato/:id')
  Editar_Contrato(
    @Param('id') id: string,
    @Body() updateF010Dto: F010EditarContratoDto,
  ) {
    return this.f010Service.Editar_Contrato(+id, updateF010Dto);
  }
}
