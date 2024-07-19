import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('datoscontacto')
export class DatosContactoEntity {
  @PrimaryGeneratedColumn('increment')
  idDatosContacto: number;
  @Column()
  nombre: string;
  @Column()
  dato: string;
}
