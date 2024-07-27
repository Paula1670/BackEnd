import { EstadoEnum } from 'src/Constantes/EstadoEnum';
import { CuotasPosiblesEntity } from 'src/Domain/cuotasposibles/entities/cuotasposible.entity';
import { SocioEntity } from 'src/Domain/socios/entities/socio.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('miscuotas')
export class MisCuotasEntity {
  @PrimaryGeneratedColumn('increment')
  IDMiCuota: number;
  @Column({ nullable: true })
  FechaInicio: Date;
  @Column({ nullable: true })
  FechaVencimiento: Date;
  @Column({ nullable: true })
  Estado: EstadoEnum;
  @ManyToOne(() => SocioEntity, (socio) => socio.cuotas)
  @JoinColumn({ name: 'socio' })
  socio: SocioEntity;
  @ManyToOne(() => CuotasPosiblesEntity, (tipoCuota) => tipoCuota.IDCuota)
  @JoinColumn({ name: 'tipoCuota' })
  tipoCuota: CuotasPosiblesEntity;

  constructor() {
    this.IDMiCuota = 1;
    //this.IDCuotasPosibles = 1;

    this.FechaInicio = new Date();
    this.FechaVencimiento = new Date();
    // this.IDSocio = 1;
    this.Estado = EstadoEnum.Pagado;
  }
}
