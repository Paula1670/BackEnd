import { PartialType } from '@nestjs/mapped-types';
import { CreateNadadorDto } from './create-nadador.dto';

export class UpdateNadadoreDto extends PartialType(CreateNadadorDto) {}
