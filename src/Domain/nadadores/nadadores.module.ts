import { Module } from '@nestjs/common';
import { NadadoresService } from './nadadores.service';
import { NadadoresController } from './nadadores.controller';
import { NadadorEntity } from './entities/nadadore.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NadadorEntity])],
  controllers: [NadadoresController],
  providers: [NadadoresService],
})
export class NadadoresModule {}
