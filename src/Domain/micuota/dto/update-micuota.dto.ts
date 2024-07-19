import { PartialType } from '@nestjs/mapped-types';
import { CreateMicuotaDto } from './create-micuota.dto';

export class UpdateMicuotaDto extends PartialType(CreateMicuotaDto) {}
