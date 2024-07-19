import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MicuotaService } from './micuota.service';
import { CreateMicuotaDto } from './dto/create-micuota.dto';
import { UpdateMicuotaDto } from './dto/update-micuota.dto';

@Controller('contratos')
export class MicuotaController {
  constructor(private readonly micuotaService: MicuotaService) {}

  @Post('/create')
  create(@Body() createMicuotaDto: CreateMicuotaDto) {
    return this.micuotaService.create(createMicuotaDto);
  }

  @Get('/getAll')
  findAll() {
    return this.micuotaService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.micuotaService.findOne(+id);
  }

  @Patch('/edit/:id')
  update(@Param('id') id: string, @Body() updateMicuotaDto: UpdateMicuotaDto) {
    return this.micuotaService.update(+id, updateMicuotaDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.micuotaService.remove(+id);
  }
}
