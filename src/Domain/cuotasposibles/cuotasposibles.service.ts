import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCuotasposibleDto } from './dto/create-cuotasposible.dto';
import { UpdateCuotasposibleDto } from './dto/update-cuotasposible.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CuotasPosiblesEntity } from './entities/cuotasposible.entity';
import { Repository } from 'typeorm';
import { MisCuotasEntity } from '../micuota/entities/micuota.entity';
import { CuotasposibleDto } from './dto/cuotasposible.dto';

@Injectable()
export class CuotasposiblesService {
  constructor(
    @InjectRepository(CuotasPosiblesEntity)
    private CuotasposiblesRepository: Repository<CuotasPosiblesEntity>,
  ) {}

  async create(createCuotaDto: CreateCuotasposibleDto) {
    const newCuota = await this.CuotasposiblesRepository.save({
      Nombre: createCuotaDto.Nombre,
      Precio: createCuotaDto.Precio,

      Federado: createCuotaDto.Federado,
    });

    return newCuota;
  }

  async findAll(): Promise<CuotasposibleDto[]> {
    const cuotaEntities = await this.CuotasposiblesRepository.find({
      relations: ['cuotas'],
    });

    return this.entitysToDtos(cuotaEntities);
  }

  async findOne(id: number): Promise<CuotasposibleDto> {
    return this.entityToDto(
      await this.CuotasposiblesRepository.findOne({
        where: { IDCuota: id },
        relations: ['cuotas'],
      }),
    );
  }

  async update(id: number, updateCuotaDto: UpdateCuotasposibleDto) {
    const cuota = await this.CuotasposiblesRepository.findOneBy({
      IDCuota: id,
    });

    if (!cuota) throw new NotFoundException('Este post no existe');
    const editedcuota: CuotasPosiblesEntity = Object.assign(
      cuota,
      updateCuotaDto,
    );

    return await this.CuotasposiblesRepository.save(editedcuota);
  }

  async remove(id: number) {
    const cuota = await this.CuotasposiblesRepository.findOneBy({
      IDCuota: id,
    });
    if (!cuota) throw new NotFoundException('Esta cuota no existe');
    await this.CuotasposiblesRepository.delete(id);
    return cuota;
  }

  private entityToDto(entity: CuotasPosiblesEntity): CuotasposibleDto {
    const cuotaDto = new CuotasposibleDto();
    cuotaDto.IdCuota = entity.IDCuota;
    cuotaDto.Nombre = entity.Nombre;
    cuotaDto.Precio = entity.Precio;
    cuotaDto.Federado = entity.Federado;
    cuotaDto.IdCuota = entity.IDCuota;

    return cuotaDto;
  }

  private entitysToDtos(entitys: CuotasPosiblesEntity[]): CuotasposibleDto[] {
    let cuotasDto: CuotasposibleDto[] = [];

    for (let entity of entitys) {
      cuotasDto.push(this.entityToDto(entity));
    }
    return cuotasDto;
  }
}
