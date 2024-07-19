import { PartialType } from '@nestjs/mapped-types';
import { CreateP002Dto } from './create-p002.dto';

export class UpdateP002Dto extends PartialType(CreateP002Dto) {}
