import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { CategoriaEntity } from './entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoriaEntity])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
