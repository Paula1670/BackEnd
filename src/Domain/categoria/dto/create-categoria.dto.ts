export class CreateCategoriaDto {
  NombreCategoria: string;

  AnoInicio: number;

  AnoFin: number;

  Categoria: number;

  constructor() {
    this.NombreCategoria = 'alevin';
    this.AnoInicio = 2002;
    this.AnoFin = 2000;
    this.Categoria = 1;
  }
}
