import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('documentacion')
export class DocumentacionEntity {
  @PrimaryGeneratedColumn('increment')
  idDocumentacion: number;
  @Column()
  titulo: string;
  @Column()
  nombreUrl: string;
  @Column()
  url: string;
  @Column()
  categoriaDocumento: CategoriaDocumentoEnum;
}
export enum CategoriaDocumentoEnum {
  Espana = 'esp',
  Andalucia = 'and',
  OtrosDocumentos = 'otros',
  Estatutos = 'estatutos',
}
