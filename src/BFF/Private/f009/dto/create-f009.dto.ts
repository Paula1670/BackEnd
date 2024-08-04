import { CategoriaEnum } from 'src/Constantes/CategoriaEnum';
import { GeneroEnum } from 'src/Constantes/GeneroEnum';

export class F009Create_UserDto {
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Domicilio: string;
  Telefono: number;
  FechaInscripcion: Date;
  Genero: GeneroEnum;
  Habilitado: number;
  //campos de socio
  crearSocio: boolean;
  idCuota: number;
  //campos de nadador
  crearNadador: boolean;
  //campos de Entrenador
  crearEntrenador: boolean;
  especialidad: string;
  socioAsociado: number;
  entrenadorAsociado: number;
  Categoria: number;
  constructor() {
    this.Nombre = 'Pau';
    this.Apellido = 'Pulido';
    this.Contrasena = 'clubnatacion';
    this.FechaNacimiento = new Date();
    this.Direccion = 'calle hermafrodita, 6';
    this.Telefono = 678462954;
    this.FechaInscripcion = new Date();
    this.Genero = GeneroEnum.Femenino;
    this.Habilitado = 1;
  }
}
