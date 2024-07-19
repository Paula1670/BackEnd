import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
Entity('destinos');
export class DestinoEntity {
  @PrimaryGeneratedColumn()
  IDDestinos: number;
  @Column()
  Destino: string;
  @Column()
  FechaSalida: Date;
  @Column()
  FechaRegreso: Date;
  @Column()
  Hotel: string;
  @Column()
  Personas: number;
  @Column()
  Precio: number;
  @Column()
  NumeroContacto: string;
  @Column()
  Comentarios: string;
  @Column()
  IDMiembroJunta: number;

  constructor() {
    this.IDDestinos = 1;
    this.Destino = 'Nombre del Destino';
    this.FechaSalida = new Date();
    this.FechaRegreso = new Date();
    this.Hotel = 'Nombre del Hotel';
    this.Personas = 1;
    this.Precio = 0.0;
    this.NumeroContacto = 'Número de Contacto';
    this.Comentarios = 'Comentarios sobre el destino';
    this.IDMiembroJunta = 1;
  }
}
