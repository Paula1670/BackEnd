import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateMinimaDto } from './dto/update-minima.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MinimaDto } from './dto/minima.dto';
import { CategoriaEntity } from '../categoria/entities/categoria.entity';
import { CreateMinimaDto } from './dto/create-minima.dto';
import { FiltrosMinimaDto } from './dto/filtros_minima.dto';
import { MinimasEntity } from './entities/minimas.entity';

@Injectable()
export class MinimasService {
  constructor(
    @InjectRepository(MinimasEntity)
    private minimasRepository: Repository<MinimasEntity>,
  ) {}

  async create(createMinimaDto: CreateMinimaDto) {
    let Categoria = new CategoriaEntity();
    Categoria.IDCategoria = createMinimaDto.Categoria;

    const newMinima = await this.minimasRepository.save({
      Estilo: createMinimaDto.Estilo,
      Prueba: createMinimaDto.Prueba,
      Temporada: createMinimaDto.Temporada,
      Piscina: createMinimaDto.Piscina,
      TiempoMinimo: createMinimaDto.TiempoMinimo,
      Genero: createMinimaDto.Genero,
      FechaVigenciaMinima: createMinimaDto.FechaVigenciaMinima,
      Categoria: Categoria,
      Campeonato: createMinimaDto.Campeonato,
    });

    return newMinima;
  }
  async findAll(): Promise<MinimaDto[]> {
    const minimasEntities = await this.minimasRepository.find({
      relations: ['Categoria'],
    });

    return this.entitysToDtos(minimasEntities);
  }

  async findAllByCategoria(categoriaId: number): Promise<MinimaDto[]> {
    const minimasEntities = await this.minimasRepository.find({
      where: {
        Categoria: { IDCategoria: categoriaId },
      },
      relations: ['Categoria'],
    });

    return this.entitysToDtos(minimasEntities);
  }

  async findOne(id: number): Promise<MinimaDto> {
    return this.entityToDto(
      await this.minimasRepository.findOne({
        where: { IDMinima: id },
        relations: ['Categoria'],
      }),
    );
  }
  async findMinimasByAno(year: number): Promise<MinimaDto[]> {
    const MinimaEntities = await this.minimasRepository
      .createQueryBuilder('minima')
      .where('EXTRACT(YEAR FROM minima.FechaVigenciaMinima) = :anio', {
        anio: year,
      })
      .getMany();

    return this.entitysToDtos(MinimaEntities);
  }

  async findMinimasByFilters(filters?: FiltrosMinimaDto): Promise<MinimaDto[]> {
    const queryBuilder = this.minimasRepository
      .createQueryBuilder('minima')
      .leftJoinAndSelect('minima.Categoria', 'categoria');

    if (filters.year) {
      queryBuilder.andWhere('YEAR(minima.FechaVigenciaMinima) = :year', {
        year: filters.year,
      });
    }
    if (filters.temporada) {
      queryBuilder.andWhere('minima.Temporada = :temporada', {
        temporada: filters.temporada,
      });
    }
    if (filters.campeonato) {
      queryBuilder.andWhere('minima.Campeonato = :campeonato', {
        campeonato: filters.campeonato,
      });
    }
    if (filters.piscina) {
      queryBuilder.andWhere('minima.Piscina = :piscina', {
        piscina: filters.piscina,
      });
    }
    if (filters.estilo) {
      queryBuilder.andWhere('minima.Estilo = :estilo', {
        estilo: filters.estilo,
      });
    }
    if (filters.prueba) {
      queryBuilder.andWhere('minima.Prueba = :prueba', {
        prueba: filters.prueba,
      });
    }
    if (filters.genero) {
      queryBuilder.andWhere('minima.Genero = :genero', {
        genero: filters.genero,
      });
    }
    if (filters.categoria) {
      queryBuilder.andWhere('minima.Categoria = :categoria', {
        categoria: filters.categoria,
      });
    }

    return this.entitysToDtos(await queryBuilder.getMany());
  }

  async update(id: number, updateMinimaDto: UpdateMinimaDto) {
    const minima = await this.minimasRepository.findOneBy({ IDMinima: id });

    let Categoria = new CategoriaEntity();
    Categoria.IDCategoria = updateMinimaDto.Categoria;

    if (!minima) throw new NotFoundException('Este post no existe');
    const editedMinima: MinimasEntity = Object.assign(minima, updateMinimaDto);
    editedMinima.Categoria = Categoria;
    return await this.minimasRepository.save(editedMinima);
  }

  async remove(id: number) {
    const minima = await this.minimasRepository.findOneBy({ IDMinima: id });
    if (!minima) throw new NotFoundException('Este User no existe');
    await this.minimasRepository.delete(id);
    return minima;
  }

  private entityToDto(entity: MinimasEntity): MinimaDto {
    const minimaDto = new MinimaDto();

    minimaDto.IDMinima = entity.IDMinima;
    minimaDto.TiempoMinimo = entity.TiempoMinimo;
    minimaDto.Temporada = entity.Temporada;
    minimaDto.Prueba = entity.Prueba;
    minimaDto.Piscina = entity.Piscina;
    minimaDto.Estilo = entity.Estilo;
    minimaDto.Campeonato = entity.Campeonato;
    minimaDto.FechaVigenciaMinima = entity.FechaVigenciaMinima;
    minimaDto.Genero = entity.Genero;

    minimaDto.Categoria = entity.Categoria
      ? entity.Categoria.IDCategoria
      : null;

    return minimaDto;
  }

  private entitysToDtos(entitys: MinimasEntity[]): MinimaDto[] {
    let minimasDto: MinimaDto[] = [];

    for (let entity of entitys) {
      minimasDto.push(this.entityToDto(entity));
    }
    return minimasDto;
  }
}
