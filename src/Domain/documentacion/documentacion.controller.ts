import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DocumentacionService } from './documentacion.service';
import { CreateDocumentacionDto } from './dto/create-documentacion.dto';
import { UpdateDocumentacionDto } from './dto/update-documentacion.dto';

@Controller('documentacion')
export class DocumentacionController {
  constructor(private readonly documentacionService: DocumentacionService) {}

  @Post('/create')
  create(@Body() createDocumentacionDto: CreateDocumentacionDto) {
    return this.documentacionService.create(createDocumentacionDto);
  }

  @Get('/getAll')
  findAll() {
    return this.documentacionService.findAll();
  }

  @Get('/getById/:id')
  findOne(@Param('id') id: string) {
    return this.documentacionService.findOne(+id);
  }

  @Patch('/edit/:id')
  update(
    @Param('id') id: string,
    @Body() updateDocumentacionDto: UpdateDocumentacionDto,
  ) {
    return this.documentacionService.update(+id, updateDocumentacionDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.documentacionService.remove(+id);
  }

  @Get('/findAllEsp')
  findAllEsp() {
    return this.documentacionService.findAllEsp();
  }

  @Get('/findAllAnd')
  findAllAnd() {
    return this.documentacionService.findAllAnd();
  }

  @Get('/findAllOtros')
  findAllOtros() {
    return this.documentacionService.findAllOtros();
  }

  @Get('/findAllEstatutos')
  findAllEstatutos() {
    return this.documentacionService.findAllEstatutos();
  }
}
