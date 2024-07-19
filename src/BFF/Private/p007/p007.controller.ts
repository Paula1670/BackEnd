import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { P007Service } from './p007.service';
import { P007Create_MinimaDto } from './dto/P007Create_MinimaDto';
import { P007Editar_MinimaDto } from './dto/P007Editar_MinimaDto';

@Controller('P007')
export class P007Controller {
  constructor(private readonly p007Service: P007Service) {}

  @Get('/Get_Minimas')
  Get_Minimas() {
    return this.p007Service.Get_Minimas();
  }

  @Delete('/Delete_Minima/:id')
  Delete_Minima(@Param('id') id: string) {
    return this.p007Service.Delete_Minima(+id);
  }

  @Get('/findMinimasByAno/:year')
  findMinimasByAno(@Param('year') year: number) {
    return this.p007Service.findMinimasByAno(year);
  }

  @Get('/findMinimasByCategoria/:categoria')
  findMinimasByCategoria(@Param('categoria') categoria: number) {
    return this.p007Service.findMinimasByCategoria(categoria);
  }
}
