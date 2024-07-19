import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDatosContactoDto } from './dto/create-datos-contacto.dto';
import { UpdateDatosContactoDto } from './dto/update-datos-contacto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DatosContactoEntity } from './entities/datos-contacto.entity';
import { Repository } from 'typeorm';
import { GetDatosContactoDto } from './dto/get-datos-contacto.dto';

@Injectable()
export class DatosContactoService {
  constructor(
    @InjectRepository(DatosContactoEntity)
    private datosRepository: Repository<DatosContactoEntity>,
  ) {}

  async create(createContactoDto: CreateDatosContactoDto) {
    const newContacto = await this.datosRepository.save({
      nombre: createContactoDto.nombre,
      dato: createContactoDto.dato,
    });

    return newContacto;
  }

  async update(id: number, updateDatosContactoDto: UpdateDatosContactoDto) {
    const Contacto = await this.datosRepository.findOneBy({
      idDatosContacto: id,
    });

    if (!Contacto) throw new NotFoundException('Este post no existe');
    const editedSocio: DatosContactoEntity = Object.assign(
      Contacto,
      updateDatosContactoDto,
    );

    return await this.datosRepository.save(editedSocio);
  }

  async findAll(): Promise<GetDatosContactoDto[]> {
    const contactosEntities = await this.datosRepository.find({});

    return this.entitysToDtos(contactosEntities);
  }

  async findOne(id: number): Promise<GetDatosContactoDto> {
    return this.entityToDto(
      await this.datosRepository.findOne({
        where: { idDatosContacto: id },
      }),
    );
  }
  async remove(id: number) {
    const contacto = await this.datosRepository.findOneBy({
      idDatosContacto: id,
    });
    if (!contacto) throw new NotFoundException('Este Contacto no existe');
    await this.datosRepository.delete(id);
    return contacto;
  }

  private entityToDto(entity: DatosContactoEntity): GetDatosContactoDto {
    const contactoDto: GetDatosContactoDto = {
      idDatosContacto: entity.idDatosContacto,
      nombre: entity.nombre,
      dato: entity.dato,
    };

    return contactoDto;
  }

  private entitysToDtos(entitys: DatosContactoEntity[]): GetDatosContactoDto[] {
    let contactosDto: GetDatosContactoDto[] = [];

    for (let entity of entitys) {
      contactosDto.push(this.entityToDto(entity));
    }
    return contactosDto;
  }
}
