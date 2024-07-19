import { CategoriaEntity } from 'src/Domain/categoria/entities/categoria.entity';
import { NadadorEntity } from 'src/Domain/nadadores/entities/nadadore.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('tiempos')
export class TiempoEntity {
  @PrimaryGeneratedColumn('increment')
  IDTiempos: number;

  @ManyToOne(() => NadadorEntity, (nadador) => nadador.tiempos)
  @JoinColumn({ name: 'IDNadador' })
  Nadador: NadadorEntity;

  @ManyToOne(() => CategoriaEntity, (categoria) => categoria.tiempos)
  @JoinColumn({ name: 'IDCategoria' })
  Categoria: CategoriaEntity;

  @Column()
  Estilo: EstiloEnum;
  @Column()
  Prueba: PruebaEnum;
  @Column()
  Temporada: TemporadaEnum;
  @Column()
  Piscina: PiscinaEnum;
  @Column()
  Tiempo: string;
  @Column({ nullable: true })
  FechaMarcaNadador: Date;

  constructor() {
    this.IDTiempos = 1;
    this.Tiempo = '00:00:00';
    this.Temporada = TemporadaEnum.Invierno;
    this.Prueba = PruebaEnum.Metros200;
    this.Piscina = PiscinaEnum.Metros50;
    this.FechaMarcaNadador = new Date();
    this.Estilo = EstiloEnum.Braza;
  }
}

export enum TemporadaEnum {
  Invierno = 'invierno',
  Verano = 'verano',
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

export enum CategoriaEnum {
  benjamin = 'benjamin',
  Alevin = 'alevin',
  Infantil = 'infantil',
  Junior = 'junior',
  Absoluto = 'absoluto',
}

export enum EstiloEnum {
  Braza = 'braza',
  Crol = 'crol',
  Espalda = 'espalda',
  Mariposa = 'mariposa',
}
