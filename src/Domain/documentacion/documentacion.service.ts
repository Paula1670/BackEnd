import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentacionDto } from './dto/create-documentacion.dto';
import { UpdateDocumentacionDto } from './dto/update-documentacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CategoriaDocumentoEnum,
  DocumentacionEntity,
} from './entities/documentacion.entity';
import { GetDocumentacionDto } from './dto/get-documentacion.dto';

@Injectable()
export class DocumentacionService {
  constructor(
    @InjectRepository(DocumentacionEntity)
    private documentacionRepository: Repository<DocumentacionEntity>,
  ) {}

  async create(
    createDocumentacionDto: CreateDocumentacionDto,
  ): Promise<DocumentacionEntity> {
    const newDocu = await this.documentacionRepository.save({
      titulo: createDocumentacionDto.titulo,
      nombreUrl: createDocumentacionDto.nombreUrl,
      url: createDocumentacionDto.url,
      categoriaDocumento: createDocumentacionDto.categoriaDocumento,
    });

    return newDocu;
  }

  async findAll(): Promise<GetDocumentacionDto[]> {
    const docuEntities = await this.documentacionRepository.find({});

    return this.entitysToDtos(docuEntities);
  }

  async findOne(id: number): Promise<GetDocumentacionDto> {
    return this.entityToDto(
      await this.documentacionRepository.findOne({
        where: { idDocumentacion: id },
      }),
    );
  }

  async update(id: number, updateDocuDto: UpdateDocumentacionDto) {
    const docu = await this.documentacionRepository.findOneBy({
      idDocumentacion: id,
    });

    if (!docu) throw new NotFoundException('Este post no existe');
    const editedDocu: DocumentacionEntity = Object.assign(docu, updateDocuDto);

    return await this.documentacionRepository.save(editedDocu);
  }

  async remove(id: number) {
    const docu = await this.documentacionRepository.findOneBy({
      idDocumentacion: id,
    });
    if (!docu) throw new NotFoundException('Este User no existe');
    await this.documentacionRepository.delete(id);
    return docu;
  }
  private entityToDto(entity: DocumentacionEntity): GetDocumentacionDto {
    const docuDto = new GetDocumentacionDto();
    docuDto.idDocumentacion = entity.idDocumentacion;
    docuDto.nombreUrl = entity.nombreUrl;
    docuDto.titulo = entity.titulo;
    docuDto.url = entity.url;
    docuDto.categoriaDocumento = entity.categoriaDocumento;
    return docuDto;
  }

  private entitysToDtos(entitys: DocumentacionEntity[]): GetDocumentacionDto[] {
    let docuDto: GetDocumentacionDto[] = [];

    for (let entity of entitys) {
      docuDto.push(this.entityToDto(entity));
    }
    return docuDto;
  }

  async findAllEsp(): Promise<GetDocumentacionDto[]> {
    const DocuEntities = await this.documentacionRepository.find({
      where: {
        categoriaDocumento: CategoriaDocumentoEnum.Espana,
      },
    });

    return this.entitysToDtos(DocuEntities);
  }

  async findAllAnd(): Promise<GetDocumentacionDto[]> {
    const DocuEntities = await this.documentacionRepository.find({
      where: {
        categoriaDocumento: CategoriaDocumentoEnum.Andalucia,
      },
    });

    return this.entitysToDtos(DocuEntities);
  }

  async findAllOtros(): Promise<GetDocumentacionDto[]> {
    const DocuEntities = await this.documentacionRepository.find({
      where: {
        categoriaDocumento: CategoriaDocumentoEnum.OtrosDocumentos,
      },
    });

    return this.entitysToDtos(DocuEntities);
  }

  async findAllEstatutos(): Promise<GetDocumentacionDto[]> {
    const DocuEntities = await this.documentacionRepository.find({
      where: {
        categoriaDocumento: CategoriaDocumentoEnum.Estatutos,
      },
    });

    return this.entitysToDtos(DocuEntities);
  }
}
