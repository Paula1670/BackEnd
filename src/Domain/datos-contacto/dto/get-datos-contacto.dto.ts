export class GetDatosContactoDto {
  idDatosContacto: number;
  nombre: string;
  dato: string;
  constructor() {
    this.nombre = '';
    this.dato = '';
  }
}
