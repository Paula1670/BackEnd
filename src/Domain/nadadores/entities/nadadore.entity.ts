import { CategoriaEntity } from 'src/Domain/categoria/entities/categoria.entity';
import { EntrenadorEntity } from 'src/Domain/entrenadores/entities/entrenadore.entity';
import { SocioEntity } from 'src/Domain/socios/entities/socio.entity';
import { TiempoEntity } from 'src/domain/tiempos/entities/tiempo.entity';
import { UsuarioEntity } from 'src/domain/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('nadadores')
export class NadadorEntity {
  @PrimaryGeneratedColumn()
  idNadador: number;

  @OneToOne(() => UsuarioEntity, {
    nullable: true,
  })
  usuario: UsuarioEntity;

  @ManyToOne(() => EntrenadorEntity, (entrenador) => entrenador.nadadores)
  @JoinColumn({ name: 'entrenador' })
  entrenador: EntrenadorEntity;

  @OneToMany(() => TiempoEntity, (tiempo) => tiempo.Nadador)
  @JoinColumn({ name: 'tiempos' })
  tiempos: TiempoEntity[];

  @ManyToOne(() => SocioEntity, (socio) => socio.nadadores)
  @JoinColumn({ name: 'socio' })
  socio: SocioEntity;

  @ManyToOne(() => CategoriaEntity, (categoria) => categoria.nadadores)
  @JoinColumn({ name: 'Categoria' })
  Categoria: CategoriaEntity;
}
