import { PartialType } from '@nestjs/mapped-types';
import { CreateFFooterDto } from './create-f-footer.dto';

export class UpdateFFooterDto extends PartialType(CreateFFooterDto) {}
