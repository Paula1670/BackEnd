import { Module } from '@nestjs/common';
import { DestinosService } from './destinos.service';
import { DestinosController } from './destinos.controller';
import { DestinoEntity } from './entities/destino.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DestinoEntity])],
  controllers: [DestinosController],
  providers: [DestinosService],
})
export class DestinosModule {}
