import { PartialType } from '@nestjs/mapped-types';
import { F004Create_CuotaDto } from './create-f004.dto';

export class F004Update_CuotaDto extends PartialType(F004Create_CuotaDto) {}
