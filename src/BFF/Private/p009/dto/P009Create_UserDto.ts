import { GeneroEnum } from 'src/Constantes/GeneroEnum';

export class P009Create_UserDto {
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  //Domicilio: string;
  Telefono: number;
  FechaInscripcion: Date;
  Genero: GeneroEnum;

  constructor() {
    this.Nombre = 'Pau';
    this.Apellido = 'pulido';
    this.Contrasena = 'clubnatacion';
    this.FechaNacimiento = new Date();
    this.Direccion = 'calle hermafrodita, 6';
    this.Telefono = 678462954;
    this.FechaInscripcion = new Date();
    this.Genero = GeneroEnum.Femenino;
  }
}
