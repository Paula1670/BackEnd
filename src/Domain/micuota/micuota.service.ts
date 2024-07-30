import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMicuotaDto } from './dto/create-micuota.dto';
import { UpdateMicuotaDto } from './dto/update-micuota.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MisCuotasEntity } from './entities/micuota.entity';
import { Repository } from 'typeorm';
import { CuotasPosiblesEntity } from '../cuotasposibles/entities/cuotasposible.entity';
import { SocioEntity } from '../socios/entities/socio.entity';
import { MicuotaDto } from './dto/micuota.dto';

@Injectable()
export class MicuotaService {
  constructor(
    @InjectRepository(MisCuotasEntity)
    private cuotasRepository: Repository<MisCuotasEntity>,
  ) {}

  async create(createCuotaDto: CreateMicuotaDto) {
    let CuotasPosibles = new CuotasPosiblesEntity();
    CuotasPosibles.IDCuota = createCuotaDto.CuotasPosibles;

    let Socio = new SocioEntity();
    Socio.idSocio = createCuotaDto.Socio;

    const newCuota = await this.cuotasRepository.save({
      FechaInicio: createCuotaDto.FechaInicio,
      FechaVencimiento: createCuotaDto.FechaVencimiento,
      Estado: createCuotaDto.Estado,
      cuotaPosible: CuotasPosibles,
      socio: Socio,
    });

    return newCuota;
  }

  async update(
    id: number,
    updateCuotaDto: UpdateMicuotaDto,
  ): Promise<MisCuotasEntity> {
    const cuotas = await this.cuotasRepository.findOneBy({ IDMiCuota: id });

    let CuotasPosibles = new CuotasPosiblesEntity();
    CuotasPosibles.IDCuota = updateCuotaDto.CuotasPosibles;

    let Socio = new SocioEntity();
    Socio.idSocio = updateCuotaDto.Socio;

    if (!cuotas) throw new NotFoundException('Este post no existe');
    const editedCuota: MisCuotasEntity = Object.assign(cuotas, updateCuotaDto);

    editedCuota.Estado = updateCuotaDto.Estado;
    editedCuota.FechaInicio = updateCuotaDto.FechaInicio;
    editedCuota.FechaVencimiento = updateCuotaDto.FechaVencimiento;

    return await this.cuotasRepository.save(editedCuota);
  }

  async findAll(): Promise<MicuotaDto[]> {
    const CuotaEntities = await this.cuotasRepository.find({
      relations: ['cuotaPosible', 'socio'],
    });

    return this.entitysToDtos(CuotaEntities);
  }

  async findOne(id: number): Promise<MicuotaDto> {
    return this.entityToDto(
      await this.cuotasRepository.findOne({
        where: { IDMiCuota: id },
        relations: ['cuotaPosible', 'socio'],
      }),
    );
  }

  async getBySocio(socioId: number): Promise<MicuotaDto[]> {
    // Obtener todos los contratos del socio especificado
    const contratos = await this.cuotasRepository.find({
      where: { socio: { idSocio: socioId } }, // Socio: variable de Usuario entity, idSocio: primary key de Socio
      relations: ['cuotaPosible', 'socio'],
    });

    // Lanzar una excepción si no se encontraron contratos
    if (!contratos || contratos.length === 0) {
      throw new NotFoundException(
        `Contratos asociados al socio con ID ${socioId} no encontrados`,
      );
    }

    // Transformar las entidades en DTOs
    return contratos.map((contrato) => this.entityToDto(contrato));
  }

  async remove(id: number) {
    const cuotas = await this.cuotasRepository.findOneBy({ IDMiCuota: id });
    if (!cuotas) throw new NotFoundException('Esta cuota no existe');
    await this.cuotasRepository.delete(id);
    return cuotas;
  }

  private entityToDto(entity: MisCuotasEntity): MicuotaDto {
    const cuotaDto = new MicuotaDto();

    cuotaDto.IDMiCuota = entity.IDMiCuota;
    cuotaDto.Estado = entity.Estado;
    cuotaDto.FechaInicio = entity.FechaInicio;
    cuotaDto.FechaVencimiento = entity.FechaVencimiento;

    cuotaDto.Socio = entity.socio ? entity.socio.idSocio : null;
    cuotaDto.CuotasPosibles = entity.cuotaPosible
      ? entity.cuotaPosible.IDCuota
      : null;

    return cuotaDto;
  }

  private entitysToDtos(entitys: MisCuotasEntity[]): MicuotaDto[] {
    let micuotaDto: MicuotaDto[] = [];

    for (let entity of entitys) {
      micuotaDto.push(this.entityToDto(entity));
    }
    return micuotaDto;
  }
}
