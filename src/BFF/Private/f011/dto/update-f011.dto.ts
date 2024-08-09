import { PartialType } from '@nestjs/mapped-types';
import { CreateF011Dto } from './create-f011.dto';

export class UpdateF011Dto extends PartialType(CreateF011Dto) {}
