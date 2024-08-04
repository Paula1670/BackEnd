export class P009GetNadadorDto {
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  //Domicilio: string;
  Telefono: number;
  FechaInscripcion: Date;
  NombreCategoria: string;
  constructor() {
    this.Nombre = 'Pau';
    this.Apellido = 'pulido';
    this.Contrasena = 'clubnatacion';
    this.FechaNacimiento = new Date();
    this.Direccion = 'calle hermafrodita, 6';
    this.Telefono = 678462954;
    this.FechaInscripcion = new Date();
  }
}
