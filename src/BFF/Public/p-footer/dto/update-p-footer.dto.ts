import { PartialType } from '@nestjs/mapped-types';
import { CreatePFooterDto } from './create-p-footer.dto';

export class UpdatePFooterDto extends PartialType(CreatePFooterDto) {}
