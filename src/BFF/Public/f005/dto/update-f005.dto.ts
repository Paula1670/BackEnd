import { PartialType } from '@nestjs/mapped-types';
import { CreateF005Dto } from './create-f005.dto';

export class UpdateF005Dto extends PartialType(CreateF005Dto) {}
