import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTiempoDto } from './dto/create-tiempo.dto';
import { UpdateTiempoDto } from './dto/update-tiempo.dto';
import { TiempoEntity } from './entities/tiempo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NadadorEntity } from '../nadadores/entities/nadadore.entity';
import { TiempoDto } from './dto/tiempo.dto';
import { CategoriaEntity } from '../categoria/entities/categoria.entity';

@Injectable()
export class TiemposService {
  constructor(
    @InjectRepository(TiempoEntity)
    private tiempoRepository: Repository<TiempoEntity>,
  ) {}

  async create(createTiempoDto: CreateTiempoDto): Promise<TiempoEntity> {
    let Nadador = new NadadorEntity();
    Nadador.idNadador = createTiempoDto.IDNadador;

    let Categoria = new CategoriaEntity();
    Categoria.IDCategoria = createTiempoDto.IDCategoria;

    const newTiempo = await this.tiempoRepository.save({
      Nadador: Nadador,
      Tiempo: createTiempoDto.Tiempo,
      Temporada: createTiempoDto.Temporada,
      Prueba: createTiempoDto.Prueba,
      Piscina: createTiempoDto.Piscina,
      Estilo: createTiempoDto.Estilo,
      FechaMarcaNadador: createTiempoDto.FechaMarcaNadador,
      Categoria: Categoria,
    });

    return newTiempo;
  }

  async findAll(): Promise<TiempoDto[]> {
    const tiemposEntities = await this.tiempoRepository.find({
      relations: ['Nadador', 'Categoria'],
    });

    return this.entitysToDtos(tiemposEntities);
  }

  async findAllByNadador(nadadorId: number): Promise<TiempoDto[]> {
    const tiemposEntities = await this.tiempoRepository.find({
      where: {
        Nadador: { idNadador: nadadorId },
      },
      relations: ['Nadador', 'Categoria'],
    });

    return this.entitysToDtos(tiemposEntities);
  }

  async findOne(id: number): Promise<TiempoDto> {
    return this.entityToDto(
      await this.tiempoRepository.findOne({
        where: { IDTiempos: id },
        relations: ['Nadador', 'Categoria'],
      }),
    );
  }

  async update(id: number, updateTiempoDto: UpdateTiempoDto) {
    const tiempo = await this.tiempoRepository.findOneBy({ IDTiempos: id });
    let Nadador = new NadadorEntity();
    Nadador.idNadador = updateTiempoDto.IDNadador;

    let Categoria = new CategoriaEntity();
    Categoria.IDCategoria = updateTiempoDto.IDCategoria;

    if (!tiempo) throw new NotFoundException('Este post no existe');
    const editedTiempo: TiempoEntity = Object.assign(tiempo, updateTiempoDto);
    editedTiempo.Nadador = Nadador;
    editedTiempo.Categoria = Categoria;

    return await this.tiempoRepository.save(editedTiempo);
  }

  async remove(id: number) {
    const tiempo = await this.tiempoRepository.findOneBy({ IDTiempos: id });
    if (!tiempo) throw new NotFoundException('Este User no existe');
    await this.tiempoRepository.delete(id);
    return tiempo;
  }
  private entityToDto(entity: TiempoEntity): TiempoDto {
    const tiempoDto = new TiempoDto();

    tiempoDto.IDTiempos = entity.IDTiempos;
    tiempoDto.Tiempo = entity.Tiempo;
    tiempoDto.Temporada = entity.Temporada;
    tiempoDto.Prueba = entity.Prueba;
    tiempoDto.Piscina = entity.Piscina;
    tiempoDto.Estilo = entity.Estilo;

    tiempoDto.IDNadador = entity.Nadador ? entity.Nadador.idNadador : null;
    tiempoDto.IDCategoria = entity.Categoria
      ? entity.Categoria.IDCategoria
      : null;

    return tiempoDto;
  }

  private entitysToDtos(entitys: TiempoEntity[]): TiempoDto[] {
    let tiemposDto: TiempoDto[] = [];

    for (let entity of entitys) {
      tiemposDto.push(this.entityToDto(entity));
    }
    return tiemposDto;
  }

  async obtenerMenorTiempoPorFiltros(): Promise<any[]> {
    const mejoresTiempos = await this.tiempoRepository
      .createQueryBuilder('t')
      .innerJoin(
        (qb) => {
          return qb
            .select([
              'MIN(t.tiempo) AS MejorTiempo',
              't.temporada',
              't.estilo',
              't.prueba',
              't.piscina',
            ])
            .from(TiempoEntity, 't')
            .groupBy('t.temporada')
            .addGroupBy('t.estilo')
            .addGroupBy('t.prueba')
            .addGroupBy('t.piscina');
        },
        'MejoresTiempos',
        't.tiempo = MejoresTiempos.MejorTiempo AND t.temporada = MejoresTiempos.temporada AND t.estilo = MejoresTiempos.estilo AND t.prueba = MejoresTiempos.prueba AND t.piscina = MejoresTiempos.piscina',
      )
      .innerJoinAndSelect('t.Nadador', 'n')
      .innerJoinAndSelect('t.Categoria', 'c')
      .getMany();

    return this.entitysToDtos(mejoresTiempos);
  }

  /* estilo?: string,
  prueba?: string,
  temporada?: string,
  piscina?: string,*/
}
