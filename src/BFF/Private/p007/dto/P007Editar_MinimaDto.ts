import { PartialType } from '@nestjs/mapped-types';
import { P007Create_MinimaDto } from './P007Create_MinimaDto';

export class P007Editar_MinimaDto extends PartialType(P007Create_MinimaDto) {}
