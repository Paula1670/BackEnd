import { PartialType } from '@nestjs/mapped-types';
import { F007Create_MinimaDto } from './F007Create_MinimaDto';

export class F007Editar_MinimaDto extends PartialType(F007Create_MinimaDto) {}
