import { PartialType } from '@nestjs/mapped-types';
import { P004Create_CuotaDto } from './create-p004.dto';

export class P004Update_CuotaDto extends PartialType(P004Create_CuotaDto) {}
