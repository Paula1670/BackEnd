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
import { FiltrosMinimaDto } from 'src/Domain/minimas/dto/filtros_minima.dto';

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

  @Post('/findMinimasByFilters')
  findMinimasByFilters(@Body() findP007Dto: FiltrosMinimaDto) {
    return this.p007Service.findMinimasByFilters(findP007Dto);
  }

  @Get('/GetGeneroCategoriaByIDUser/:id')
  GetGeneroCategoriaByIDUser(@Param('id') id: number) {
    return this.p007Service.GetGeneroCategoriaByIDUser(id);
  }
}
