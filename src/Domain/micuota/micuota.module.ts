import { Module } from '@nestjs/common';
import { MicuotaService } from './micuota.service';
import { MicuotaController } from './micuota.controller';
import { MisCuotasEntity } from './entities/micuota.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MisCuotasEntity])],
  controllers: [MicuotaController],
  providers: [MicuotaService],
})
export class MicuotaModule {}
