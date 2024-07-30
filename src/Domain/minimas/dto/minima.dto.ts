import { CampeonatoEnum } from 'src/Constantes/CampeonatoEnum';
import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { GeneroEnum } from 'src/Constantes/GeneroEnum';
import { PiscinaEnum } from 'src/Constantes/PiscinaEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';

export class MinimaDto {
  IDMinima: number;
  TiempoMinimo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Categoria: number;
  Estilo: EstiloEnum;
  Genero: GeneroEnum;
  FechaVigenciaMinima: Date;
  Campeonato: CampeonatoEnum;

  constructor() {
    this.TiempoMinimo = '00:00:00';
    this.Temporada = TemporadaEnum.Invierno;
    this.Prueba = PruebaEnum.Metros200;
    this.Piscina = PiscinaEnum.Metros50;
    this.Categoria = 1;
    this.Estilo = EstiloEnum.Braza;
    this.Genero = GeneroEnum.Femenino;
    this.FechaVigenciaMinima = new Date();
  }
}
