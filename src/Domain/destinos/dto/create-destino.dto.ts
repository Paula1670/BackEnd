export class CreateDestinoDto {
  Destino: string;
  FechaSalida: Date;
  FechaRegreso: Date;
  Hotel: string;
  Personas: number;
  Precio: number;
  NumeroContacto: string;
  Comentarios: string;
  IDMiembroJunta: number;

  constructor() {
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
