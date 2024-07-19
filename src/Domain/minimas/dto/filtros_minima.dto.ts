import { GeneroEnum } from 'src/Constantes/GeneroEnum';

export class FiltrosMinimaDto {
  year?: number;
  temporada?: TemporadaEnum;
  piscina?: PiscinaEnum;
  estilo?: EstiloEnum;
  prueba?: PruebaEnum;
  genero?: GeneroEnum;
  categoria?: number;
  campeonato?: CampeonatoEnum;
}

export enum TemporadaEnum {
  Invierno = 'invierno',
  Verano = 'verano',
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
export enum CampeonatoEnum {
  Regional = 'regional',
  Nacional = 'nacional',
  Continental = 'continental',
  Mundial = 'mundial',
  Olimpico = 'olimpico',
}
export enum EstiloEnum {
  Braza = 'braza',
  Crol = 'crol',
  Espalda = 'espalda',
  Mariposa = 'mariposa',
}
