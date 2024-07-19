import { GeneroEnum } from 'src/Constantes/GeneroEnum';

export class GetCategoriaDto {
  NombreCategoria: string;

  AnoInicio: number;

  AnoFin: number;

  IDCategoria: number;
  Nadadores: number[];
  Minimas: number[];
  Genero: GeneroEnum;

  constructor() {
    this.NombreCategoria = 'alevin';
    this.AnoInicio = 2002;
    this.AnoFin = 2000;
    this.IDCategoria = 1;
    this.Nadadores = [];
    this.Minimas = [];
    this.Genero = GeneroEnum.Femenino;
  }
}
