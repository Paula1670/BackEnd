import { PartialType } from '@nestjs/mapped-types';
import { CreateP005Dto } from './create-p005.dto';

export class UpdateP005Dto extends PartialType(CreateP005Dto) {}
