import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('galeria')
export class GaleriaEntity {
  @PrimaryGeneratedColumn('increment')
  idGaleria: number;

  @Column()
  pie: string;

  @Column()
  nombreFoto: string;

  @Column()
  url: string;

  @Column('longtext')
  imagenBase64: string;
}
