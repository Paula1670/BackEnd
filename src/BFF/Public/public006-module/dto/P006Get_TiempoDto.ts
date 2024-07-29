import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';

export class P006Get_TiempoDto {
  Tiempo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Estilo: EstiloEnum;
  FechaMarcaNadador: Date;
  NombreUsuario: string;
  ApellidoUsuario: string;
  NombreCategoria: string;

  constructor() {
    this.Tiempo = '00:00:00';
    this.Temporada = TemporadaEnum.Invierno;
    this.Prueba = PruebaEnum.Metros200;
    this.Piscina = PiscinaEnum.Metros50;
    this.Estilo = EstiloEnum.Braza;
    this.FechaMarcaNadador = new Date();
  }
}

export enum PiscinaEnum {
  Metros25 = '25m',
  Metros50 = '50m',
}
