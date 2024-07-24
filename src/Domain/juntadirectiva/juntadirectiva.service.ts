import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJuntadirectivaDto } from './dto/create-juntadirectiva.dto';
import { UpdateJuntadirectivaDto } from './dto/update-juntadirectiva.dto';
import { JuntaDirectivaEntity } from './entities/juntadirectiva.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { JuntadirectivaDto } from './dto/juntadirectiva.dto';

@Injectable()
export class JuntadirectivaService {
  constructor(
    @InjectRepository(JuntaDirectivaEntity)
    private juntaRepository: Repository<JuntaDirectivaEntity>,
  ) {}

  async create(
    createJuntaDto: CreateJuntadirectivaDto,
  ): Promise<JuntaDirectivaEntity> {
    let Usuarios: UsuarioEntity[] = [];
    let Usuario = new UsuarioEntity();

    for (let iduser of createJuntaDto.usuario) {
      Usuario.IDUsuario = iduser;
      Usuarios.push(Usuario);
    }

    const newJunta = await this.juntaRepository.save({
      fechaInicioCargo: createJuntaDto.fechaInicioCargo,
      fechaTerminoCargo: createJuntaDto.fechaTerminoCargo,
      puesto: createJuntaDto.puesto,
      usuario: Usuarios,
    });

    return newJunta;
  }

  async update(
    id: number,
    updateJuntaDto: UpdateJuntadirectivaDto,
  ): Promise<JuntaDirectivaEntity> {
    const junta = await this.juntaRepository.findOneBy({ idMiembroJunta: id });

    let Usuarios: UsuarioEntity[] = [];
    let Usuario = new UsuarioEntity();

    for (let iduser of updateJuntaDto.usuario) {
      Usuario.IDUsuario = iduser;
      Usuarios.push(Usuario);
    }

    if (!junta) throw new NotFoundException('Este post no existe');
    const editedJunta: JuntaDirectivaEntity = Object.assign(
      junta,
      updateJuntaDto,
    );

    editedJunta.usuario = Usuarios;

    return await this.juntaRepository.save(editedJunta);
  }

  async findAll(): Promise<JuntadirectivaDto[]> {
    const JuntaEntities = await this.juntaRepository.find({
      relations: ['usuario'],
    });

    return this.entitysToDtos(JuntaEntities);
  }

  async findOne(id: number): Promise<JuntadirectivaDto> {
    return this.entityToDto(
      await this.juntaRepository.findOne({
        where: { idMiembroJunta: id },
        relations: ['usuario'],
      }),
    );
  }
  async remove(id: number) {
    const Junta = await this.juntaRepository.findOneBy({ idMiembroJunta: id });
    if (!Junta) throw new NotFoundException('Esta Junta no existe');
    await this.juntaRepository.delete(id);
    return Junta;
  }

  private entityToDto(entity: JuntaDirectivaEntity): JuntadirectivaDto {
    const juntaDto = new JuntadirectivaDto();

    let Usuarios: UsuarioEntity[] = [];

    for (let Usuario of Usuarios) {
      juntaDto.usuario.push(Usuario.IDUsuario);
    }

    return juntaDto;
  }

  private entitysToDtos(entitys: JuntaDirectivaEntity[]): JuntadirectivaDto[] {
    let JUNTADto: JuntadirectivaDto[] = [];

    for (let entity of entitys) {
      JUNTADto.push(this.entityToDto(entity));
    }
    return JUNTADto;
  }
}