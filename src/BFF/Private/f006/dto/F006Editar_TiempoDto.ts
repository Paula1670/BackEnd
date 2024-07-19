import { PartialType } from '@nestjs/mapped-types';
import { F006Create_TiempoDto } from './F006Create_TiempoDto';

export class F006Editar_TiempoDto extends PartialType(F006Create_TiempoDto) {}
