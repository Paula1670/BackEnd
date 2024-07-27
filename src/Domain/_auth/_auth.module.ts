import { Module } from '@nestjs/common';
import { AuthService } from './_auth.service';
import { AuthController } from './_auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from '../usuario/usuario.module';
import { JuntadirectivaModule } from '../juntadirectiva/juntadirectiva.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'yourSecretKey', // Debe ser una clave secreta segura
      signOptions: { expiresIn: '1h' }, // Opciones de expiración del token
    }),
    UsuarioModule,
    JuntadirectivaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
