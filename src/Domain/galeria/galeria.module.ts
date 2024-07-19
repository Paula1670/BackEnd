import { Module } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { GaleriaController } from './galeria.controller';
import { GaleriaEntity } from './entities/galeria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GaleriaEntity])],
  controllers: [GaleriaController],
  providers: [GaleriaService],
})
export class GaleriaModule {}
