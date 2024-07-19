import { Module } from '@nestjs/common';
import { EntrenadoresService } from './entrenadores.service';
import { EntrenadoresController } from './entrenadores.controller';
import { EntrenadorEntity } from './entities/entrenadore.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EntrenadorEntity])],
  controllers: [EntrenadoresController],
  providers: [EntrenadoresService],
})
export class EntrenadoresModule {}
