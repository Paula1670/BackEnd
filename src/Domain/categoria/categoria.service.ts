import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriaEntity } from './entities/categoria.entity';
import { EntityManager, Repository } from 'typeorm';
import { GetCategoriaDto } from './dto/get-categoria.dto';
import { NadadorEntity } from '../nadadores/entities/nadadore.entity';
@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(CategoriaEntity)
    private CategoriaRepository: Repository<CategoriaEntity>,
  ) {}

  async findAll(): Promise<GetCategoriaDto[]> {
    const categoriaentity = await this.CategoriaRepository.find({
      relations: ['nadadores', 'minimas'],
    });

    return this.entitysToDtos(categoriaentity);
  }

  async findOne(id: number): Promise<GetCategoriaDto> {
    return this.entityToDto(
      await this.CategoriaRepository.findOne({
        where: { IDCategoria: id },
        relations: ['nadadores', 'minimas'],
      }),
    );
  }

  async findCategoriaByNadador(nadadorId: number): Promise<GetCategoriaDto> {
    const categoria = await this.CategoriaRepository.findOne({
      where: { nadadores: { idNadador: nadadorId } }, //Socio: variable de Usuario entity, idSocio: primarykey de Socio
    });
    if (!categoria) {
      throw new NotFoundException(
        `Categoria asociada al nadador con ID ${nadadorId} no encontrado`,
      );
    }
    return this.entityToDto(categoria);
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.CategoriaRepository.findOneBy({
      IDCategoria: id,
    });

    if (!categoria) throw new NotFoundException('Este post no existe');
    const editedcategoria: CategoriaEntity = Object.assign(
      categoria,
      updateCategoriaDto,
    );

    return await this.CategoriaRepository.save(editedcategoria);
  }

  private entityToDto(entity: CategoriaEntity): GetCategoriaDto {
    const categoriaDto = new GetCategoriaDto();

    categoriaDto.IDCategoria = entity.IDCategoria;
    categoriaDto.NombreCategoria = entity.NombreCategoria;
    categoriaDto.AnoInicio = entity.AnoInicio;
    categoriaDto.AnoFin = entity.AnoFin;
    categoriaDto.Genero = entity.Genero;

    return categoriaDto;
  }

  private entitysToDtos(entitys: CategoriaEntity[]): GetCategoriaDto[] {
    let categoriasDto: GetCategoriaDto[] = [];

    for (let entity of entitys) {
      categoriasDto.push(this.entityToDto(entity));
    }
    return categoriasDto;
  }
}
