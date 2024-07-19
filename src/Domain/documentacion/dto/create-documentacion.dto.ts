export class CreateDocumentacionDto {
  titulo: string;

  nombreUrl: string;

  url: string;

  categoriaDocumento: CategoriaDocumentoEnum;

  constructor() {
    this.titulo = '';
    this.nombreUrl = '';
    this.url = '';
    this.categoriaDocumento = CategoriaDocumentoEnum.Andalucia;
  }
}
export enum CategoriaDocumentoEnum {
  Espana = 'esp',
  Andalucia = 'and',
  OtrosDocumentos = 'otros',
  Estatutos = 'estatutos',
}
