import { Module } from '@nestjs/common';
import { DatosContactoService } from './datos-contacto.service';
import { DatosContactoController } from './datos-contacto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatosContactoEntity } from './entities/datos-contacto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DatosContactoEntity])],
  controllers: [DatosContactoController],
  providers: [DatosContactoService],
})
export class DatosContactoModule {}
