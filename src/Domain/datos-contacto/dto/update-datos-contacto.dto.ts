import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosContactoDto } from './create-datos-contacto.dto';

export class UpdateDatosContactoDto extends PartialType(CreateDatosContactoDto) {}
