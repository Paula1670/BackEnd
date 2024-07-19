import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNadadorDto } from './dto/create-nadador.dto';
import { UpdateNadadoreDto } from './dto/update-nadadore.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NadadorEntity } from './entities/nadadore.entity';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { SocioEntity } from '../socios/entities/socio.entity';
import { EntrenadorEntity } from '../entrenadores/entities/entrenadore.entity';
import { NadadorDto } from './dto/nadador.dto';
import { CategoriaEntity } from '../categoria/entities/categoria.entity';

@Injectable()
export class NadadoresService {
  constructor(
    @InjectRepository(NadadorEntity)
    private nadadorRepository: Repository<NadadorEntity>,
  ) {}

  async create(createNadadorDto: CreateNadadorDto): Promise<NadadorEntity> {
    let Socio = new SocioEntity();
    Socio.idSocio = createNadadorDto.socio;

    let Categoria = new CategoriaEntity();
    Categoria.IDCategoria = createNadadorDto.Categoria;

    let Entrenador = new EntrenadorEntity();
    Entrenador.idEntrenador = createNadadorDto.entrenador;

    const newNadador = await this.nadadorRepository.save({
      socio: Socio,
      entrenador: Entrenador,

      Categoria: Categoria,
    });

    return newNadador;
  }

  async update(
    id: number,
    updateNadadorDto: UpdateNadadoreDto,
  ): Promise<NadadorEntity> {
    const Nadador = await this.nadadorRepository.findOneBy({ idNadador: id });
    let Socio = new SocioEntity();
    Socio.idSocio = updateNadadorDto.socio;

    let Entrenador = new EntrenadorEntity();
    Entrenador.idEntrenador = updateNadadorDto.entrenador;

    let Categoria = new CategoriaEntity();
    Categoria.IDCategoria = updateNadadorDto.Categoria;

    if (!Nadador) throw new NotFoundException('Este post no existe');
    const editedNadador: NadadorEntity = Object.assign(
      Nadador,
      updateNadadorDto,
    );
    editedNadador.socio = Socio;

    editedNadador.entrenador = Entrenador;
    editedNadador.Categoria = Categoria;
    return await this.nadadorRepository.save(editedNadador);
  }

  async findAll(): Promise<NadadorDto[]> {
    const NadadorEntities = await this.nadadorRepository.find({
      relations: ['entrenador', 'socio', 'tiempos', 'Categoria'],
    });

    return this.entitysToDtos(NadadorEntities);
  }

  async findOne(id: number): Promise<NadadorDto> {
    return this.entityToDto(
      await this.nadadorRepository.findOne({
        where: { idNadador: id },
        relations: ['entrenador', 'socio', 'tiempos', 'Categoria'],
      }),
    );
  }
  async remove(id: number) {
    const Nadador = await this.nadadorRepository.findOneBy({ idNadador: id });
    if (!Nadador) throw new NotFoundException('Este Nadador no existe');
    await this.nadadorRepository.delete(id);
    return Nadador;
  }

  private entityToDto(entity: NadadorEntity): NadadorDto {
    const nadadorDto = new NadadorDto();

    nadadorDto.socio = entity.socio ? entity.socio.idSocio : null;
    nadadorDto.entrenador = entity.entrenador
      ? entity.entrenador.idEntrenador
      : null;

    nadadorDto.Categoria = entity.Categoria
      ? entity.Categoria.IDCategoria
      : null;

    return nadadorDto;
  }

  private entitysToDtos(entitys: NadadorEntity[]): NadadorDto[] {
    let nadadorDto: NadadorDto[] = [];

    for (let entity of entitys) {
      nadadorDto.push(this.entityToDto(entity));
    }
    return nadadorDto;
  }

  /*async findNadadorByUserId(usuarioId: number): Promise<NadadorEntity> {
    const nadador = await this.nadadorRepository.findOne({
      where: { usuario: { IDUsuario: usuarioId } },
      relations: ['usuario'],
    });

    if (!nadador) {
      throw new NotFoundException(
        `Socio asociado al usuario con ID ${usuarioId} no encontrado`,
      );
    }

    return nadador;
  }*/

  async save(nadadorEntity: NadadorEntity): Promise<NadadorEntity> {
    const newNadador = await this.nadadorRepository.save(nadadorEntity);

    return newNadador;
  }

  async actualizarCategoriaDeNadador(idNadador: number, IDcategoria: number) {
    let nadador: NadadorEntity = await this.nadadorRepository.findOne({
      where: { idNadador: idNadador },
      relations: ['Categoria'],
    });

    nadador.Categoria = new CategoriaEntity();
    nadador.Categoria.IDCategoria = IDcategoria;

    this.save(nadador);
    return nadador;
  }
}
