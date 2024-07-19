import { PartialType } from '@nestjs/mapped-types';
import { CreateCuotasposibleDto } from './create-cuotasposible.dto';

export class UpdateCuotasposibleDto extends PartialType(CreateCuotasposibleDto) {}
