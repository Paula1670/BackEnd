import { JuntaDirectivaEntity } from 'src/Domain/juntadirectiva/entities/juntadirectiva.entity';
import { MisCuotasEntity } from 'src/Domain/micuota/entities/micuota.entity';
import { NadadorEntity } from 'src/Domain/nadadores/entities/nadadore.entity';
import { UsuarioEntity } from 'src/Domain/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('socios')
export class SocioEntity {
  @PrimaryGeneratedColumn('increment')
  idSocio: number;

  @OneToMany(() => MisCuotasEntity, (misCuota) => misCuota.socio)
  @JoinColumn({ name: 'miCuota' })
  cuotas: MisCuotasEntity[];

  @OneToMany(() => NadadorEntity, (nadador) => nadador.socio)
  @JoinColumn({ name: 'nadador' })
  nadadores: NadadorEntity[];
}
