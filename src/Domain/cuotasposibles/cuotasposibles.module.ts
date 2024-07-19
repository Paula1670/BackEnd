import { Module } from '@nestjs/common';
import { CuotasposiblesService } from './cuotasposibles.service';
import { CuotasposiblesController } from './cuotasposibles.controller';
import { CuotasPosiblesEntity } from './entities/cuotasposible.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CuotasPosiblesEntity])],
  controllers: [CuotasposiblesController],
  providers: [CuotasposiblesService],
})
export class CuotasposiblesModule {}
