import { GeneroEnum } from 'src/Constantes/GeneroEnum';

export class F006Create_TiempoDto {
  Tiempo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Categoria: CategoriaEnum;
  Estilo: EstiloEnum;
  Genero: GeneroEnum;
  IDCategoria: number;
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

export enum CategoriaEnum {
  Prebenjamin = 'prebenjamin',
  benjamin = 'benjamin',
  Alevin = 'alevin',
  Infantil = 'infantil',
  Junior = 'junior',
  Absoluto = 'absoluto',
}

export enum EstiloEnum {
  Braza = 'braza',
  Crol = 'crol',
  Espalda = 'espalda',
  Mariposa = 'mariposa',
}
