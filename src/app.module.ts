import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MinimasModule } from './domain/minimas/minimas.module';
import { UsuarioModule } from './domain/usuario/usuario.module';
import { TiemposModule } from './domain/tiempos/tiempos.module';
import { UsuarioEntity } from './domain/usuario/entities/usuario.entity';
import { TiempoEntity } from './domain/tiempos/entities/tiempo.entity';
import { HttpClientModule } from '@tresdoce/nestjs-httpclient';
import { P009Module } from './BFF/Private/p009/p009.module';
import { MinimasEntity } from './domain/minimas/entities/minimas.entity';
import { P007Module } from './BFF/Private/p007/p007.module';
import { F006Module } from './BFF/Private/f006/f006.module';
import { F007Module } from './BFF/Private/f007/f007.module';
import { F009Module } from './BFF/Private/f009/f009.module';
import { F010Module } from './BFF/Private/f010/f010.module';
import { P010Module } from './BFF/Private/p010/p010.module';
import { MisCuotasEntity } from './Domain/micuota/entities/micuota.entity';
import { CuotasPosiblesEntity } from './Domain/cuotasposibles/entities/cuotasposible.entity';
import { CuotasposiblesModule } from './Domain/cuotasposibles/cuotasposibles.module';
import { MicuotaModule } from './Domain/micuota/micuota.module';
import { NadadorEntity } from './Domain/nadadores/entities/nadadore.entity';
import { EntrenadorEntity } from './Domain/entrenadores/entities/entrenadore.entity';
import { SocioEntity } from './Domain/socios/entities/socio.entity';
import { JuntaDirectivaEntity } from './Domain/juntadirectiva/entities/juntadirectiva.entity';
import { SociosModule } from './Domain/socios/socios.module';
import { NadadoresModule } from './Domain/nadadores/nadadores.module';
import { EntrenadoresModule } from './Domain/entrenadores/entrenadores.module';
import { JuntadirectivaModule } from './Domain/juntadirectiva/juntadirectiva.module';
import { P004Module } from './BFF/Public/p004/p004.module';
import { F004Module } from './BFF/Public/f004/f004.module';
import { CategoriaModule } from './Domain/categoria/categoria.module';
import { CategoriaEntity } from './Domain/categoria/entities/categoria.entity';
import { Public006Module } from './BFF/Public/public006-module/public006-module.module';
import { P006Module } from './BFF/Private/p006/p006.module';
import { GaleriaEntity } from './Domain/galeria/entities/galeria.entity';
import { F012Module } from './BFF/Public/f012/f012.module';
import { GaleriaModule } from './Domain/galeria/galeria.module';
import { P012Module } from './BFF/Public/p012/p012.module';
import { AuthModule } from './Domain/_auth/_auth.module';
import { DocumentacionEntity } from './Domain/documentacion/entities/documentacion.entity';
import { DocumentacionModule } from './Domain/documentacion/documentacion.module';
import { F005Module } from './BFF/Public/f005/f005.module';
import { P005Controller } from './BFF/Public/p005/p005.controller';
import { P005Module } from './BFF/Public/p005/p005.module';
import { DatosContactoEntity } from './Domain/datos-contacto/entities/datos-contacto.entity';
import { DatosContactoModule } from './Domain/datos-contacto/datos-contacto.module';
import { PFooterModule } from './BFF/Public/p-footer/p-footer.module';
import { FFooterModule } from './BFF/Public/f-footer/f-footer.module';

@Module({
  imports: [
    //Local instance MySQL80
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'club',
      entities: [
        UsuarioEntity,
        TiempoEntity,
        MinimasEntity,
        MisCuotasEntity,
        CuotasPosiblesEntity,
        EntrenadorEntity,
        NadadorEntity,
        SocioEntity,
        JuntaDirectivaEntity,
        CategoriaEntity,
        GaleriaEntity,
        DocumentacionEntity,
        DatosContactoEntity,
      ],
      synchronize: true,
    }),
    //DestinosModule,
    MinimasModule,
    TiemposModule,
    UsuarioModule,
    MicuotaModule,
    CuotasposiblesModule,
    SociosModule,
    NadadoresModule,
    EntrenadoresModule,
    JuntadirectivaModule,
    CategoriaModule,
    GaleriaModule,
    HttpClientModule,
    P009Module,
    P006Module,
    Public006Module,
    P007Module,
    F006Module,
    F007Module,
    F009Module,
    F010Module,
    P010Module,
    P004Module,
    F004Module,
    F012Module,
    P012Module,
    AuthModule,
    DocumentacionModule,
    F005Module,
    P005Module,
    DatosContactoModule,
    PFooterModule,
    FFooterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
