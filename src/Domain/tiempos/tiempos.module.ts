import { Module } from '@nestjs/common';
import { TiemposService } from './tiempos.service';
import { TiemposController } from './tiempos.controller';
import { TiempoEntity } from './entities/tiempo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TiempoEntity])],
  controllers: [TiemposController],
  providers: [TiemposService],
})
export class TiemposModule {}
