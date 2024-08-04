import { PuestoEnum } from 'src/Constantes/PuestoEnum';

export interface P009GetJuntaDirectivaDto {
  idUsuario: number;
  idPuesto: number;
  Nombre: string;
  Apellido: string;
  Contrasena: string;
  FechaNacimiento: Date;
  Direccion: string;
  Domicilio: string;
  Telefono: number;
  FechaInscripcion: Date;
  FechaInicioCargo: Date;
  FechaTerminoCargo: Date;
  Puesto: PuestoEnum;
}
