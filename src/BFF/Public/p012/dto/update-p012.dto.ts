import { PartialType } from '@nestjs/mapped-types';
import { CreateP012Dto } from './create-p012.dto';

export class UpdateP012Dto extends PartialType(CreateP012Dto) {}
