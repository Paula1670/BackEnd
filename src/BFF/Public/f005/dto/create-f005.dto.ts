export class CreateF005Dto {
  titulo: string;
  nombreUrl: string;
  url: string;
  categoriaDocumento: CategoriaDocumentoEnum;
}
export enum CategoriaDocumentoEnum {
  Espana = 'esp',
  Andalucia = 'and',
  OtrosDocumentos = 'otros',
  Estatutos = 'estatutos',
}
