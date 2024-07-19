import { PartialType } from '@nestjs/mapped-types';
import { F009Create_UserDto } from './create-f009.dto';

export class F009Editar_UserDto extends PartialType(F009Create_UserDto) {}
