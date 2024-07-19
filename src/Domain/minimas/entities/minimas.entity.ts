import { GeneroEnum } from 'src/Constantes/GeneroEnum';
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

export enum TemporadaEnum {
  Invierno = 'invierno',
  Verano = 'verano',
}

export enum CampeonatoEnum {
  Regional = 'regional',
  Nacional = 'nacional',
  Continental = 'continental',
  Mundial = 'mundial',
  Olimpico = 'olimpico',
}

export enum PruebaEnum {
  Metros50 = '50',
  Metros100 = '100',
  Metros200 = '200',
  Metros400 = '400',
  Metros800 = '800',
  Metros1500 = '1500',
}

export enum PiscinaEnum {
  Metros25 = '25m',
  Metros50 = '50m',
}

export enum EstiloEnum {
  Braza = 'braza',
  Crol = 'crol',
  Espalda = 'espalda',
  Mariposa = 'mariposa',
}
