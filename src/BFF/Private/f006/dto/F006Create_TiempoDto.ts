import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { PiscinaEnum } from 'src/Constantes/PiscinaEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';

export class F006CreateTiempoDto {
  IDNadador: number;
  Tiempo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Estilo: EstiloEnum;
  FechaMarcaNadador: Date;

  constructor() {
    this.IDNadador = 1;
    this.Tiempo = '00:00:00';
    this.Temporada = TemporadaEnum.Invierno;
    this.Prueba = PruebaEnum.Metros200;
    this.Piscina = PiscinaEnum.Metros50;
    this.Estilo = EstiloEnum.Braza;
    this.FechaMarcaNadador = new Date();
  }
}
