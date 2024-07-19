import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PFooterService } from './p-footer.service';
import { CreatePFooterDto } from './dto/create-p-footer.dto';
import { UpdatePFooterDto } from './dto/update-p-footer.dto';

@Controller('pFooter')
export class PFooterController {
  constructor(private readonly pFooterService: PFooterService) {}

  @Get('getAll')
  findAll() {
    return this.pFooterService.findAll();
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.pFooterService.remove(+id);
  }
}
