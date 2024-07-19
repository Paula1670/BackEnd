import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GaleriaEntity } from './entities/galeria.entity';
import { Repository } from 'typeorm';
import { GaleriaDto } from './dto/galeria.dto';

@Injectable()
export class GaleriaService {
  constructor(
    @InjectRepository(GaleriaEntity)
    private galeriaRepository: Repository<GaleriaEntity>,
  ) {}

  async create(createGaleriaDto: CreateGaleriaDto): Promise<GaleriaEntity> {
    const newGaleria = await this.galeriaRepository.save({
      pie: createGaleriaDto.pie,
      nombreFoto: createGaleriaDto.nombreFoto,
      url: createGaleriaDto.url,
      imagenBase64: createGaleriaDto.imagenBase64,
    });
    return newGaleria;
  }
  async findAll(): Promise<GaleriaDto[]> {
    const galeriaEntities = await this.galeriaRepository.find({});

    return this.entitysToDtos(galeriaEntities);
  }

  async findOne(id: number): Promise<GaleriaDto> {
    return this.entityToDto(await this.galeriaRepository.findOne({}));
  }

  async update(id: number, updateGaleriaDto: UpdateGaleriaDto) {
    const galeria = await this.galeriaRepository.findOneBy({
      idGaleria: id,
    });

    if (!galeria) throw new NotFoundException('Este post no existe');

    const editedGaleria: GaleriaEntity = Object.assign(
      galeria,
      updateGaleriaDto,
    );

    return await this.galeriaRepository.save(editedGaleria);
  }

  async remove(id: number) {
    const galeria = await this.galeriaRepository.findOneBy({
      idGaleria: id,
    });
    if (!galeria) throw new NotFoundException('Esta galeria no existe');
    await this.galeriaRepository.delete(id);
    return galeria;
  }
  private entityToDto(entity: GaleriaEntity): GaleriaDto {
    const galeriaDto = new GaleriaDto();

    galeriaDto.idGaleria = entity.idGaleria;
    galeriaDto.pie = entity.pie;
    galeriaDto.nombreFoto = entity.nombreFoto;
    galeriaDto.url = entity.url;
    galeriaDto.imagenBase64 = entity.imagenBase64;

    return galeriaDto;
  }

  private entitysToDtos(entitys: GaleriaEntity[]): GaleriaDto[] {
    let galeriaDto: GaleriaDto[] = [];

    for (let entity of entitys) {
      galeriaDto.push(this.entityToDto(entity));
    }
    return galeriaDto;
  }
}
