export class P009GetEntrenadorDto {
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Telefono: number;
  FechaInscripcion: Date;
  especialidad: string;
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
