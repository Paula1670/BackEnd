import { PartialType } from '@nestjs/mapped-types';
import { CreateMinimaDto } from './create-minima.dto';

export class UpdateMinimaDto extends PartialType(CreateMinimaDto) {}
