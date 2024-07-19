import { PartialType } from '@nestjs/mapped-types';
import { P006Create_TiempoDto } from './P006Create_Tiempo.dto';

export class P006Update_TiempoDto extends PartialType(P006Create_TiempoDto) {}
