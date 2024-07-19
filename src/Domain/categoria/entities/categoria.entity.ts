import { GeneroEnum } from 'src/Constantes/GeneroEnum';
import { NadadorEntity } from 'src/Domain/nadadores/entities/nadadore.entity';
import { MinimasEntity } from 'src/domain/minimas/entities/minimas.entity';
import { TiempoEntity } from 'src/domain/tiempos/entities/tiempo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categorias')
export class CategoriaEntity {
  @PrimaryGeneratedColumn('increment')
  IDCategoria: number;
  @Column()
  NombreCategoria: string;
  @Column()
  AnoInicio: number;
  @Column()
  AnoFin: number;
  @Column()
  Genero: GeneroEnum;
  @OneToMany(() => MinimasEntity, (minima) => minima.Categoria)
  @JoinColumn({ name: 'minimas' })
  minimas: MinimasEntity[];

  @OneToMany(() => NadadorEntity, (nadador) => nadador.Categoria)
  @JoinColumn({ name: 'nadador' })
  nadadores: NadadorEntity[];

  @OneToMany(() => TiempoEntity, (tiempo) => tiempo.Categoria)
  @JoinColumn({ name: 'tiempo' })
  tiempos: TiempoEntity[];
}
