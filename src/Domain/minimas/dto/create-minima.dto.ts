import { GeneroEnum } from 'src/Constantes/GeneroEnum';

export class CreateMinimaDto {
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
    this.Campeonato = CampeonatoEnum.Continental;
  }
}

export enum TemporadaEnum {
  Invierno = 'invierno',
  Verano = 'verano',
}

export enum CampeonatoEnum {
  Regional = 'regional',
  Nacional = 'nacional',
  Continental = 'continental',
  Mundial = 'mundial',
  Olimpico = 'olimpico',
}
export enum PruebaEnum {
  Metros50 = '50',
  Metros100 = '100',
  Metros200 = '200',
  Metros400 = '400',
  Metros800 = '800',
  Metros1500 = '1500',
}

export enum PiscinaEnum {
  Metros25 = '25m',
  Metros50 = '50m',
}

export enum EstiloEnum {
  Braza = 'braza',
  Crol = 'crol',
  Espalda = 'espalda',
  Mariposa = 'mariposa',
}
