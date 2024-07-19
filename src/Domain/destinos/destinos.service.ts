import { Injectable } from '@nestjs/common';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { UpdateDestinoDto } from './dto/update-destino.dto';
import { DestinoEntity } from './entities/destino.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DestinosService {
  constructor(
    @InjectRepository(DestinoEntity)
    private destinoRepository: Repository<DestinoEntity>,
  ) {}

  create(createDestinoDto: CreateDestinoDto): Promise<DestinoEntity> {
    let Destino: DestinoEntity = {
      IDDestinos: 0,
      Destino: createDestinoDto.Destino,
      FechaSalida: createDestinoDto.FechaSalida,
      FechaRegreso: createDestinoDto.FechaRegreso,
      Hotel: createDestinoDto.Hotel,
      Personas: createDestinoDto.Personas,
      Precio: createDestinoDto.Precio,
      NumeroContacto: createDestinoDto.NumeroContacto,
      Comentarios: createDestinoDto.Comentarios,
      IDMiembroJunta: createDestinoDto.IDMiembroJunta,
    };
    return this.destinoRepository.save(Destino);
  }

  findAll(): Promise<DestinoEntity[]> {
    return this.destinoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} destino`;
  }

  async update(id: number, updateDestinoDto: UpdateDestinoDto) {
    let Destino: DestinoEntity = {
      IDDestinos: 0,
      Destino: updateDestinoDto.Destino,
      FechaSalida: updateDestinoDto.FechaSalida,
      FechaRegreso: updateDestinoDto.FechaRegreso,
      Hotel: updateDestinoDto.Hotel,
      Personas: updateDestinoDto.Personas,
      Precio: updateDestinoDto.Precio,
      NumeroContacto: updateDestinoDto.NumeroContacto,
      Comentarios: updateDestinoDto.Comentarios,
      IDMiembroJunta: updateDestinoDto.IDMiembroJunta,
    };
    return await this.destinoRepository.update(id, Destino);
  }

  async remove(id: number): Promise<void> {
    await this.destinoRepository.delete(id);
  }
}
