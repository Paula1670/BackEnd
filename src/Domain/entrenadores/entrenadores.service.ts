import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEntrenadoreDto } from './dto/create-entrenadore.dto';
import { UpdateEntrenadoreDto } from './dto/update-entrenadore.dto';
import { EntrenadorEntity } from './entities/entrenadore.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { NadadorEntity } from '../nadadores/entities/nadadore.entity';
import { EntrenadorDto } from './dto/entrenador.dto.';

@Injectable()
export class EntrenadoresService {
  constructor(
    @InjectRepository(EntrenadorEntity)
    private entrenadorRepository: Repository<EntrenadorEntity>,
  ) {}

  async create(
    createEntrenadorDto: CreateEntrenadoreDto,
  ): Promise<EntrenadorEntity> {
    const newEntrenador = await this.entrenadorRepository.save({
      especialidad: createEntrenadorDto.especialidad,
      fechaContratacion: new Date(),
    });

    return newEntrenador;
  }

  async findAll(): Promise<EntrenadorDto[]> {
    const entrenadorEntities = await this.entrenadorRepository.find({
      relations: ['nadadores'],
    });

    return this.entitysToDtos(entrenadorEntities);
  }

  async findOne(id: number): Promise<EntrenadorDto> {
    return this.entityToDto(
      await this.entrenadorRepository.findOne({
        where: { idEntrenador: id },
        relations: ['nadadores'],
      }),
    );
  }

  async update(id: number, updateEntrenadorDto: UpdateEntrenadoreDto) {
    const entrenador = await this.entrenadorRepository.findOneBy({
      idEntrenador: id,
    });

    if (!entrenador) throw new NotFoundException('Este post no existe');
    const editedEntrenador: EntrenadorEntity = Object.assign(
      entrenador,
      updateEntrenadorDto,
    );

    return await this.entrenadorRepository.save(editedEntrenador);
  }

  async remove(id: number) {
    const entrenador = await this.entrenadorRepository.findOneBy({
      idEntrenador: id,
    });
    if (!entrenador) throw new NotFoundException('Este Entrenador no existe');
    await this.entrenadorRepository.delete(id);
    return entrenador;
  }
  private entityToDto(entity: EntrenadorEntity): EntrenadorDto {
    const entrenadorDto = new EntrenadorDto();

    entrenadorDto.idEntrenador = entity.idEntrenador;
    entrenadorDto.especialidad = entity.especialidad;
    entrenadorDto.fechaContratacion = entity.fechaContratacion;

    return entrenadorDto;
  }

  private entitysToDtos(entitys: EntrenadorEntity[]): EntrenadorDto[] {
    let entrenadorDto: EntrenadorDto[] = [];

    for (let entity of entitys) {
      entrenadorDto.push(this.entityToDto(entity));
    }
    return entrenadorDto;
  }

  /* async findEntrenadorByUserId(usuarioId: number): Promise<EntrenadorEntity> {
    const entrenador = await this.entrenadorRepository.findOne({
      where: { usuario: { IDUsuario: usuarioId } },
      relations: ['usuario'],
    });

    if (!entrenador) {
      throw new NotFoundException(
        `Socio asociado al usuario con ID ${usuarioId} no encontrado`,
      );
    }

    return entrenador;
  }*/
}
