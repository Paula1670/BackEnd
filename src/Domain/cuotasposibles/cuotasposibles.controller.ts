import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CuotasposiblesService } from './cuotasposibles.service';
import { CreateCuotasposibleDto } from './dto/create-cuotasposible.dto';
import { UpdateCuotasposibleDto } from './dto/update-cuotasposible.dto';

@Controller('cuotasposibles')
export class CuotasposiblesController {
  constructor(private readonly cuotasposiblesService: CuotasposiblesService) {}

  @Post('create')
  create(@Body() createCuotasposibleDto: CreateCuotasposibleDto) {
    return this.cuotasposiblesService.create(createCuotasposibleDto);
  }

  @Get('/getAll')
  findAll() {
    return this.cuotasposiblesService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.cuotasposiblesService.findOne(+id);
  }

  @Patch('/edit/:id')
  update(
    @Param('id') id: string,
    @Body() updateCuotasposibleDto: UpdateCuotasposibleDto,
  ) {
    return this.cuotasposiblesService.update(+id, updateCuotasposibleDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.cuotasposiblesService.remove(+id);
  }
}
