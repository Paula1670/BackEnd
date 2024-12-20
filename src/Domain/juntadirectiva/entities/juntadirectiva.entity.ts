import { PuestoEnum } from 'src/Constantes/PuestoEnum';
import { EntrenadorEntity } from 'src/Domain/entrenadores/entities/entrenadore.entity';
import { NadadorEntity } from 'src/Domain/nadadores/entities/nadadore.entity';
import { SocioEntity } from 'src/Domain/socios/entities/socio.entity';
import { UsuarioEntity } from 'src/Domain/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('juntadirectiva')
export class JuntaDirectivaEntity {
  @PrimaryGeneratedColumn('increment')
  idMiembroJunta: number;
  @Column()
  fechaInicioCargo: Date;
  @Column()
  fechaTerminoCargo: Date;
  @Column()
  puesto: PuestoEnum;
}
