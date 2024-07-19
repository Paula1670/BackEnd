import { PartialType } from '@nestjs/mapped-types';
import { CreateJuntadirectivaDto } from './create-juntadirectiva.dto';

export class UpdateJuntadirectivaDto extends PartialType(CreateJuntadirectivaDto) {}
