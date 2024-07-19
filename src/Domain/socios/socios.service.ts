import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSocioDto } from './dto/create-socio.dto';
import { SocioEntity } from './entities/socio.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { MisCuotasEntity } from '../micuota/entities/micuota.entity';
import { NadadorEntity } from '../nadadores/entities/nadadore.entity';
import { SocioDto } from './dto/socio.dto';
import { UpdateSocioDto } from './dto/update-socio.dto';

@Injectable()
export class SociosService {
  constructor(
    @InjectRepository(SocioEntity)
    private socioRepository: Repository<SocioEntity>,
  ) {}

  async create(createSocioDto: CreateSocioDto) {
    const newSocio = await this.socioRepository.save({});

    return newSocio;
  }

  async update(id: number, updateSocioDto: UpdateSocioDto) {
    const Socio = await this.socioRepository.findOneBy({ idSocio: id });

    if (!Socio) throw new NotFoundException('Este post no existe');
    const editedSocio: SocioEntity = Object.assign(Socio, updateSocioDto);

    return await this.socioRepository.save(editedSocio);
  }

  async findAll(): Promise<SocioDto[]> {
    const socioEntities = await this.socioRepository.find({
      relations: ['nadadores', 'cuotas'],
    });

    return this.entitysToDtos(socioEntities);
  }

  async findOne(id: number): Promise<SocioDto> {
    return this.entityToDto(
      await this.socioRepository.findOne({
        where: { idSocio: id },
        relations: ['nadadores', 'cuotas'],
      }),
    );
  }
  async remove(id: number) {
    const Socio = await this.socioRepository.findOneBy({ idSocio: id });
    if (!Socio) throw new NotFoundException('Este Socio no existe');
    await this.socioRepository.delete(id);
    return Socio;
  }

  private entityToDto(entity: SocioEntity): SocioDto {
    const socioDto: SocioDto = {
      idSocio: entity.idSocio,
    };

    return socioDto;
  }

  private entitysToDtos(entitys: SocioEntity[]): SocioDto[] {
    let sociosDto: SocioDto[] = [];

    for (let entity of entitys) {
      sociosDto.push(this.entityToDto(entity));
    }
    return sociosDto;
  }

  /*async findSocioByUserId(usuarioId: number): Promise<SocioEntity> {
    const socio = await this.socioRepository.findOne({
      where: { usuario: { IDUsuario: usuarioId } },
      relations: ['usuario'],
    });

    if (!socio) {
      throw new NotFoundException(
        `Socio asociado al usuario con ID ${usuarioId} no encontrado`,
      );
    }

    return socio;
  }*/
}
