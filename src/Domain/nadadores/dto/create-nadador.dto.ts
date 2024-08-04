export class CreateNadadorDto {
  socioAsociado: number;
  entrenadorAsociado: number;
  Categoria: number;

  constructor() {
    this.socioAsociado = 3;
    this.entrenadorAsociado = 1;
    this.Categoria = 1;
  }
}
