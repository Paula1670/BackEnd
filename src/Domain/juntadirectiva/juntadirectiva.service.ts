import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJuntadirectivaDto } from './dto/create-juntadirectiva.dto';
import { UpdateJuntadirectivaDto } from './dto/update-juntadirectiva.dto';
import { JuntaDirectivaEntity } from './entities/juntadirectiva.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../usuario/entities/usuario.entity';
import { JuntadirectivaDto } from './dto/juntadirectiva.dto';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioDto } from '../usuario/dto/usuario.dto';

@Injectable()
export class JuntadirectivaService {
  constructor(
    @InjectRepository(JuntaDirectivaEntity)
    private juntaRepository: Repository<JuntaDirectivaEntity>,
    private usuarioService: UsuarioService,
  ) {}

  async create(
    createJuntaDto: CreateJuntadirectivaDto,
  ): Promise<JuntaDirectivaEntity> {
    const newJunta = await this.juntaRepository.save({
      fechaInicioCargo: createJuntaDto.fechaInicioCargo,
      fechaTerminoCargo: createJuntaDto.fechaTerminoCargo,
      puesto: createJuntaDto.puesto,
    });
    return newJunta;
  }

  async update(
    id: number,
    updateJuntaDto: UpdateJuntadirectivaDto,
  ): Promise<JuntaDirectivaEntity> {
    const junta = await this.juntaRepository.findOneBy({ idMiembroJunta: id });

    if (!junta) throw new NotFoundException('Este post no existe');
    const editedJunta: JuntaDirectivaEntity = Object.assign(
      junta,
      updateJuntaDto,
    );

    return await this.juntaRepository.save(editedJunta);
  }

  async findAll(): Promise<JuntadirectivaDto[]> {
    const JuntaEntities = await this.juntaRepository.find({});

    return this.entitysToDtos(JuntaEntities);
  }

  async findOne(id: number): Promise<JuntadirectivaDto> {
    return this.entityToDto(
      await this.juntaRepository.findOne({
        where: { idMiembroJunta: id },
      }),
    );
  }
  async remove(id: number) {
    //Uso el usuario service para borrar una linea de la base de datos de junta Directiva
    //y como tiene foreignt key con usuario debo ponerla a NULL
    let user: UsuarioDto;
    user = await this.usuarioService.findById(id);

    const userJunta = await this.juntaRepository.findOneBy({
      idMiembroJunta: user.juntaDirectiva,
    });
    user.juntaDirectiva = null;
    await this.usuarioService.update(id, user);
    console.log(userJunta);
    if (!userJunta) throw new NotFoundException('Esta Junta no existe');
    console.log(userJunta.idMiembroJunta);
    await this.juntaRepository.delete(userJunta.idMiembroJunta);
    return userJunta;
  }

  private entityToDto(entity: JuntaDirectivaEntity): JuntadirectivaDto {
    return {
      idMiembroJunta: entity.idMiembroJunta,
      fechaInicioCargo: entity.fechaInicioCargo,
      fechaTerminoCargo: entity.fechaTerminoCargo,
      puesto: entity.puesto,
    };
  }

  private entitysToDtos(entitys: JuntaDirectivaEntity[]): JuntadirectivaDto[] {
    let JUNTADto: JuntadirectivaDto[] = [];

    for (let entity of entitys) {
      JUNTADto.push(this.entityToDto(entity));
    }
    return JUNTADto;
  }
}
