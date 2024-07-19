import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { P006Service } from './p006.service';

@Controller('P006')
export class P006Controller {
  constructor(private readonly p006Service: P006Service) {}

  @Get('/Get_Tiempos')
  Get_Tiempos() {
    return this.p006Service.Get_Tiempos();
  }

  @Get('/findAllByNadador/:id')
  findAllByNadador(@Param('id') id: string) {
    return this.p006Service.findAllByNadador(+id);
  }

  @Delete('/Delete_Tiempo/:id')
  Delete_Tiempo(@Param('id') id: string) {
    return this.p006Service.Delete_Tiempo(+id);
  }
}
