import { Module } from '@nestjs/common';
import { MinimasService } from './minimas.service';
import { MinimasController } from './minimas.controller';
import { MinimasEntity } from './entities/minimas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MinimasEntity])],
  controllers: [MinimasController],
  providers: [MinimasService],
})
export class MinimasModule {}
