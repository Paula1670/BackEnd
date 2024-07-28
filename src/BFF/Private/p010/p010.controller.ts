import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { P010Service } from './p010.service';

@Controller('P010')
export class P010Controller {
  constructor(private readonly p010Service: P010Service) {}

  @Get('/Get_Contratos')
  Get_Contratos() {
    return this.p010Service.Get_Contratos();
  }

  @Delete('/Delete_Contrato/:id')
  Delete_Contrato(@Param('id') id: string) {
    return this.p010Service.Delete_Contrato(+id);
  }

  /*@Get('/Get_ContratosBySocio/:id')
  Get_ContratosBySocio(@Param('id') id: string) {
    return this.p010Service.Get_ContratosBySocio(id);
  }*/

  @Get('/Get_ContratosByUsuario/:id')
  Get_ContratosByUsuario(@Param('id') id: string) {
    return this.p010Service.Get_ContratosByUsuario(id);
  }
}
