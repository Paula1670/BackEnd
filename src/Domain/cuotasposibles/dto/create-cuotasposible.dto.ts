export class CreateCuotasposibleDto {
  Nombre: string;
  Precio: number;

  Federado: number;

  constructor() {
    this.Nombre = 'Nombre del Contrato';
    this.Precio = 0.0;
    this.Federado = 0;
  }
}
