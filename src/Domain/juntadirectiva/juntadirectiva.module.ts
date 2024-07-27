import { Module } from '@nestjs/common';
import { JuntadirectivaService } from './juntadirectiva.service';
import { JuntadirectivaController } from './juntadirectiva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuntaDirectivaEntity } from './entities/juntadirectiva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JuntaDirectivaEntity])],
  controllers: [JuntadirectivaController],
  providers: [JuntadirectivaService],
})
export class JuntadirectivaModule {}
