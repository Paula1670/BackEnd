import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FFooterService } from './f-footer.service';
import { CreateFFooterDto } from './dto/create-f-footer.dto';
import { UpdateFFooterDto } from './dto/update-f-footer.dto';

@Controller('fFooter')
export class FFooterController {
  constructor(private readonly fFooterService: FFooterService) {}

  @Post('create')
  create(@Body() createFFooterDto: CreateFFooterDto) {
    return this.fFooterService.create(createFFooterDto);
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.fFooterService.findOne(+id);
  }

  @Patch('edit/:id')
  update(@Param('id') id: string, @Body() updateFFooterDto: UpdateFFooterDto) {
    return this.fFooterService.update(+id, updateFFooterDto);
  }
}
