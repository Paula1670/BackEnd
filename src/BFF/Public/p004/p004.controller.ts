import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { P004Service } from './p004.service';
@Controller('P004')
export class P004Controller {
  constructor(private readonly p004Service: P004Service) {}

  @Get('/Get_Cuotas')
  Get_Cuotas() {
    return this.p004Service.Get_Cuotas();
  }

  @Delete('/Delete_Cuota/:id')
  Delete_Cuota(@Param('id') id: string) {
    return this.p004Service.Delete_Cuota(+id);
  }
}
