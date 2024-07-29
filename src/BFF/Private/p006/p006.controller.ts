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

  @Get('/findAllByUserId/:id')
  findAllByUserId(@Param('id') id: string) {
    return this.p006Service.findAllByUserId(+id);
  }

  @Get('/findMinimasByNadador/:id')
  findMinimasByNadador(@Param('id') id: string) {
    return this.p006Service.findMinimasByNadador(+id);
  }

  @Delete('/Delete_Tiempo/:id')
  Delete_Tiempo(@Param('id') id: string) {
    return this.p006Service.Delete_Tiempo(+id);
  }
}
