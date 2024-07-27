import { MisCuotasEntity } from 'src/Domain/micuota/entities/micuota.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cuotasposibles')
export class CuotasPosiblesEntity {
  @PrimaryGeneratedColumn('increment')
  IDCuota: number;
  @Column()
  Nombre: string;
  @Column()
  Precio: number;
  @Column()
  Federado: number;
  @OneToMany(() => MisCuotasEntity, (cuota) => cuota.tipoCuota)
  @JoinColumn({ name: 'cuotas' })
  cuotas: MisCuotasEntity[];
  constructor() {
    this.IDCuota = 1;
    this.Nombre = 'Federados sin hermano';
    this.Precio = 50;
    this.Federado = 0;
  }
}
