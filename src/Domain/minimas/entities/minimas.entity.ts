import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { GeneroEnum } from 'src/Constantes/GeneroEnum';
import { PiscinaEnum } from 'src/Constantes/PiscinaEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';
import { CategoriaEntity } from 'src/Domain/categoria/entities/categoria.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('minimas')
export class MinimasEntity {
  @PrimaryGeneratedColumn('increment')
  IDMinima: number;

  @Column()
  Estilo: EstiloEnum;
  @Column()
  Prueba: PruebaEnum;
  @Column()
  Temporada: TemporadaEnum;
  @Column()
  Piscina: PiscinaEnum;
  @Column()
  TiempoMinimo: string;
  @Column()
  Genero: GeneroEnum;
  @Column({ nullable: true })
  FechaVigenciaMinima: Date;

  @ManyToOne(() => CategoriaEntity, (categoria) => categoria.minimas)
  @JoinColumn({ name: 'Categoria' })
  Categoria: CategoriaEntity;
  @Column()
  Campeonato: CampeonatoEnum;

  constructor() {
    this.IDMinima = 1;

    this.Temporada = TemporadaEnum.Invierno;
    this.Piscina = PiscinaEnum.Metros50;
    this.Prueba = PruebaEnum.Metros200;
    this.Estilo = EstiloEnum.Braza;
    this.TiempoMinimo = '00:00:00';
    this.Genero = GeneroEnum.Femenino;
    this.FechaVigenciaMinima = new Date();
    this.Campeonato = CampeonatoEnum.Continental;
  }
}

export enum CampeonatoEnum {
  Regional = 'regional',
  Nacional = 'nacional',
  Continental = 'continental',
  Mundial = 'mundial',
  Olimpico = 'olimpico',
}
