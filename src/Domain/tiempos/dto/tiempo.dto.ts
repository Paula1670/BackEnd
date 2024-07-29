import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { PiscinaEnum } from 'src/Constantes/PiscinaEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';

export class TiempoDto {
  IDTiempos: number;
  IDNadador: number;
  Tiempo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Estilo: EstiloEnum;

  FechaMarcaNadador: Date;
  IDCategoria: number;

  constructor() {
    this.IDNadador = 1;
    this.Tiempo = '00:00:00';
    this.Temporada = TemporadaEnum.Invierno;
    this.Prueba = PruebaEnum.Metros200;
    this.Piscina = PiscinaEnum.Metros50;
    this.FechaMarcaNadador = new Date();
    this.Estilo = EstiloEnum.Braza;
  }
}
