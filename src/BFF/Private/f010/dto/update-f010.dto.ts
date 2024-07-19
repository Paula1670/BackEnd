import { PartialType } from '@nestjs/mapped-types';
import { F010CreateContratoDto } from './create-f010.dto';

export class F010EditarContratoDto extends PartialType(F010CreateContratoDto) {}
