import { PartialType } from '@nestjs/mapped-types';
import { P009Create_UserDto } from './P009Create_UserDto';

export class P009Editar_UserDto extends PartialType(P009Create_UserDto) {}
