import { GeneroEnum } from 'src/Constantes/GeneroEnum';
import { EntrenadorEntity } from 'src/Domain/entrenadores/entities/entrenadore.entity';
import { JuntaDirectivaEntity } from 'src/Domain/juntadirectiva/entities/juntadirectiva.entity';
import { NadadorEntity } from 'src/Domain/nadadores/entities/nadadore.entity';
import { SocioEntity } from 'src/Domain/socios/entities/socio.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('usuarios')
export class UsuarioEntity {
  @PrimaryGeneratedColumn('increment')
  IDUsuario: number;
  @Column()
  Nombre: string;
  @Column()
  Apellido: string;
  @Column()
  Contrasena: string;
  @Column()
  FechaNacimiento: Date;
  @Column()
  Direccion: string;
  @Column()
  Domicilio: string;
  @Column()
  Telefono: number;
  @Column()
  FechaInscripcion: Date;
  @Column()
  Genero: GeneroEnum;
  @Column()
  Habilitado: number;

  @OneToOne(() => EntrenadorEntity, {
    nullable: true,
  })
  @JoinColumn({ name: 'entrenador' })
  Entrenador: EntrenadorEntity;

  @OneToOne(() => NadadorEntity, {
    nullable: true,
  })
  @JoinColumn({ name: 'nadador' })
  Nadador: NadadorEntity;

  @OneToOne(() => SocioEntity, { nullable: true })
  @JoinColumn({ name: 'socio' })
  Socio: SocioEntity;

  @OneToOne(() => JuntaDirectivaEntity, { nullable: true })
  @JoinColumn({ name: 'juntaDirectiva' })
  juntaDirectiva: JuntaDirectivaEntity;

  constructor() {
    this.IDUsuario = 1;
    this.Nombre = '';
    this.Contrasena = '';
    this.FechaNacimiento = new Date();
    this.Direccion = '';
    this.Telefono = 1;
    this.FechaInscripcion = new Date();
    this.Genero = GeneroEnum.Femenino;
    this.Habilitado = 1;
  }
}
