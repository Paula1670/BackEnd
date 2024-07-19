import { PartialType } from '@nestjs/mapped-types';
import { CreateF012Dto } from './create-f012.dto';

export class UpdateF012Dto extends PartialType(CreateF012Dto) {}
