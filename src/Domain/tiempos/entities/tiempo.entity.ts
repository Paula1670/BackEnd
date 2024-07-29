import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { PiscinaEnum } from 'src/Constantes/PiscinaEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';
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
