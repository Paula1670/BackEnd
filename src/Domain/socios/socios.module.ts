import { Module } from '@nestjs/common';
import { SociosService } from './socios.service';
import { SociosController } from './socios.controller';
import { SocioEntity } from './entities/socio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SocioEntity])],
  controllers: [SociosController],
  providers: [SociosService],
})
export class SociosModule {}
