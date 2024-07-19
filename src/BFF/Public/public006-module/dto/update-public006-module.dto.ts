import { PartialType } from '@nestjs/mapped-types';
import { CreatePublic006ModuleDto } from './create-public006-module.dto';

export class UpdatePublic006ModuleDto extends PartialType(CreatePublic006ModuleDto) {}
