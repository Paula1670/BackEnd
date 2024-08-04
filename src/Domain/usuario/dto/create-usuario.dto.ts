import { GeneroEnum } from 'src/Constantes/GeneroEnum';

export class CreateUsuarioDto {
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Domicilio: string;
  Telefono: number;
  FechaInscripcion: Date;
  Genero: GeneroEnum;
  Socio: number;
  Nadador: number;
  Entrenador: number;
  juntaDirectiva: number;
  Habilitado: number;

  constructor() {
    this.Nombre = 'Pau';
    this.Apellido = 'Pulido';
    this.Contrasena = 'clubnatacion';
    this.FechaNacimiento = new Date();
    this.Direccion = 'calle hermafrodita, 6';
    this.Telefono = 678462954;
    this.FechaInscripcion = new Date();
    this.Genero = GeneroEnum.Femenino;
    this.Entrenador = 1;
    this.Socio = 1;
    this.Nadador = 1;
    this.juntaDirectiva = 1;
    this.Habilitado = 1;
  }
}
