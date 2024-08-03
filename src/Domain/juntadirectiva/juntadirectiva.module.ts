import { Module } from '@nestjs/common';
import { JuntadirectivaService } from './juntadirectiva.service';
import { JuntadirectivaController } from './juntadirectiva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuntaDirectivaEntity } from './entities/juntadirectiva.entity';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forFeature([JuntaDirectivaEntity]), UsuarioModule],

  controllers: [JuntadirectivaController],
  providers: [JuntadirectivaService],
  exports: [JuntadirectivaService],
})
export class JuntadirectivaModule {}
