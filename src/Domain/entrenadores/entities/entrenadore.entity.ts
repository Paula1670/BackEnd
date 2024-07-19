import { NadadorEntity } from 'src/Domain/nadadores/entities/nadadore.entity';
import { UsuarioEntity } from 'src/domain/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('entrenadores')
export class EntrenadorEntity {
  @PrimaryGeneratedColumn('increment')
  idEntrenador: number;
  @Column()
  fechaContratacion: Date;
  @Column()
  especialidad: string;

  @OneToMany(() => NadadorEntity, (nadador) => nadador.entrenador)
  @JoinColumn({ name: 'nadador' })
  nadadores: NadadorEntity[];
}
