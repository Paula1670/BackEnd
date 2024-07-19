import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JuntadirectivaService } from './juntadirectiva.service';
import { CreateJuntadirectivaDto } from './dto/create-juntadirectiva.dto';
import { UpdateJuntadirectivaDto } from './dto/update-juntadirectiva.dto';

@Controller('juntadirectiva')
export class JuntadirectivaController {
  constructor(private readonly juntadirectivaService: JuntadirectivaService) {}

  @Post('/create')
  create(@Body() createJuntadirectivaDto: CreateJuntadirectivaDto) {
    return this.juntadirectivaService.create(createJuntadirectivaDto);
  }

  @Get('/getAll')
  findAll() {
    return this.juntadirectivaService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.juntadirectivaService.findOne(+id);
  }

  @Patch('/edit/:id')
  update(
    @Param('id') id: string,
    @Body() updateJuntadirectivaDto: UpdateJuntadirectivaDto,
  ) {
    return this.juntadirectivaService.update(+id, updateJuntadirectivaDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.juntadirectivaService.remove(+id);
  }
}
