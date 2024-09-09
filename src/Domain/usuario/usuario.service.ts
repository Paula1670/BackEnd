import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './entities/usuario.entity';
import { IsNull, Not, Repository } from 'typeorm';
import { NadadorEntity } from '../nadadores/entities/nadadore.entity';
import { SocioEntity } from '../socios/entities/socio.entity';
import { EntrenadorEntity } from '../entrenadores/entities/entrenadore.entity';
import { UsuarioDto } from './dto/usuario.dto';
import { JuntaDirectivaEntity } from '../juntadirectiva/entities/juntadirectiva.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    let Socio = new SocioEntity();
    Socio.idSocio = createUsuarioDto.Socio;

    let Entrenador = new EntrenadorEntity();
    Entrenador.idEntrenador = createUsuarioDto.Entrenador;

    let Nadador = new NadadorEntity();
    Nadador.idNadador = createUsuarioDto.Nadador;

    let JuntaDirectiva = new JuntaDirectivaEntity();
    JuntaDirectiva.idMiembroJunta = createUsuarioDto.juntaDirectiva;

    const saltRounds = 10; // Puedes ajustar la cantidad de rondas según sea necesario

    // Hasheamos la contraseña antes de guardar al usuario
    const hashedPassword = await bcrypt.hash(
      createUsuarioDto.Contrasena,
      saltRounds,
    );

    const newUser = await this.usuarioRepository.save({
      Nombre: createUsuarioDto.Nombre,
      Apellido: createUsuarioDto.Apellido,
      Contrasena: hashedPassword, // Guardamos la contraseña hasheada
      FechaNacimiento: createUsuarioDto.FechaNacimiento,
      Direccion: createUsuarioDto.Direccion,
      Domicilio: createUsuarioDto.Domicilio,
      Telefono: createUsuarioDto.Telefono,
      FechaInscripcion: createUsuarioDto.FechaInscripcion,
      Genero: createUsuarioDto.Genero,
      Socio: Socio,
      Entrenador: Entrenador,
      Nadador: Nadador,
      juntaDirectiva: JuntaDirectiva,
      Habilitado: 1,
    });

    return newUser;
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UsuarioEntity> {
    const User = await this.usuarioRepository.findOneBy({ IDUsuario: id });

    let Nadador = new NadadorEntity();
    Nadador.idNadador = updateUsuarioDto.Nadador;

    let Entrenador = new EntrenadorEntity();
    Entrenador.idEntrenador = updateUsuarioDto.Entrenador;

    let Socio = new SocioEntity();
    Socio.idSocio = updateUsuarioDto.Socio;

    let JuntaDirectiva = new JuntaDirectivaEntity();
    JuntaDirectiva.idMiembroJunta = updateUsuarioDto.juntaDirectiva;

    if (!User) throw new NotFoundException('Este post no existe');
    const editedUser: UsuarioEntity = Object.assign(User, updateUsuarioDto);

    editedUser.Nadador = Nadador;
    editedUser.Socio = Socio;
    editedUser.Entrenador = Entrenador;
    editedUser.juntaDirectiva = JuntaDirectiva;

    const saltRounds = 10; // Puedes ajustar la cantidad de rondas según sea necesario

    // Hasheamos la contraseña antes de guardar al usuario
    const hashedPassword = await bcrypt.hash(editedUser.Contrasena, saltRounds);
    editedUser.Contrasena = hashedPassword;

    return await this.usuarioRepository.save(editedUser);
  }

  async findAllActivated(): Promise<UsuarioDto[]> {
    const UsuarioEntities = await this.usuarioRepository.find({
      relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
      where: {
        Habilitado: 1,
      },
    });

    return this.entitysToDtos(UsuarioEntities);
  }

  async findAllInactivated(): Promise<UsuarioDto[]> {
    const UsuarioEntities = await this.usuarioRepository.find({
      relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
      where: {
        Habilitado: 0,
      },
    });

    return this.entitysToDtos(UsuarioEntities);
  }

  async findOne(id: number): Promise<UsuarioDto> {
    return this.entityToDto(
      await this.usuarioRepository.findOne({
        where: { IDUsuario: id },
        relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
      }),
    );
  }

  async desactivate(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({
      IDUsuario: id,
      Habilitado: 1,
    });

    if (!usuario) {
      throw new NotFoundException(
        'Este usuario no existe o ya está desactivado',
      );
    }

    usuario.Habilitado = 0;

    await this.usuarioRepository.save(usuario);

    return usuario;
  }

  async activate(id: number) {
    const usuario = await this.usuarioRepository.findOneBy({
      IDUsuario: id,
      Habilitado: 0,
    });

    if (!usuario) {
      throw new NotFoundException(
        'Este usuario no existe o ya está desactivado',
      );
    }

    usuario.Habilitado = 1;

    await this.usuarioRepository.save(usuario);

    return usuario;
  }

  private entityToDto(entity: UsuarioEntity): UsuarioDto {
    if (entity == null) return null;
    const usuarioDto = new UsuarioDto();

    usuarioDto.IDUsuario = entity.IDUsuario;
    usuarioDto.Nombre = entity.Nombre;
    usuarioDto.Contrasena = entity.Contrasena;
    usuarioDto.FechaInscripcion = entity.FechaInscripcion;
    usuarioDto.FechaNacimiento = entity.FechaNacimiento;
    usuarioDto.Direccion = entity.Direccion;
    usuarioDto.Domicilio = entity.Domicilio;
    usuarioDto.Telefono = entity.Telefono;
    usuarioDto.Genero = entity.Genero;
    usuarioDto.Apellido = entity.Apellido;
    usuarioDto.Habilitado = entity.Habilitado;

    usuarioDto.Nadador = entity.Nadador ? entity.Nadador.idNadador : null;
    usuarioDto.juntaDirectiva = entity.juntaDirectiva
      ? entity.juntaDirectiva.idMiembroJunta
      : null;

    if (entity.Socio == null) {
      usuarioDto.Socio = null;
    } else {
      usuarioDto.Socio = entity.Socio.idSocio;
    }

    if (entity.Entrenador == null) {
      usuarioDto.Entrenador = null;
    } else {
      usuarioDto.Entrenador = entity.Entrenador.idEntrenador;
    }

    return usuarioDto;
  }

  private entitysToDtos(entitys: UsuarioEntity[]): UsuarioDto[] {
    let usuariosDto: UsuarioDto[] = [];

    for (let entity of entitys) {
      usuariosDto.push(this.entityToDto(entity));
    }
    return usuariosDto;
  }

  async findUserBySocioId(socioId: number): Promise<UsuarioDto> {
    const usuario = await this.usuarioRepository.findOne({
      where: { Socio: { idSocio: socioId } }, //Socio: variable de Usuario entity, idSocio: primarykey de Socio
      relations: ['Socio'],
    });
    if (!usuario) {
      throw new NotFoundException(
        `Usuario asociado al socio con ID ${socioId} no encontrado`,
      );
    }
    return this.entityToDto(usuario);
  }

  async findUserByEntrenadorId(entrenadorId: number): Promise<UsuarioDto> {
    const usuario = await this.usuarioRepository.findOne({
      where: { Entrenador: { idEntrenador: entrenadorId } }, //Socio: variable de Usuario entity, idSocio: primarykey de Socio
      relations: ['Entrenador'],
    });
    if (!usuario) {
      throw new NotFoundException(
        `Usuario asociado al entrenador con ID ${entrenadorId} no encontrado`,
      );
    }
    return this.entityToDto(usuario);
  }

  async findUserByNadadorId(nadadorId: number): Promise<UsuarioDto> {
    const usuario = await this.usuarioRepository.findOne({
      where: { Nadador: { idNadador: nadadorId } }, //Socio: variable de Usuario entity, idSocio: primarykey de Socio
      relations: ['Nadador'],
    });
    if (!usuario) {
      throw new NotFoundException(
        `Usuario asociado al nadador con ID ${nadadorId} no encontrado`,
      );
    }
    return this.entityToDto(usuario);
  }

  async findByIdSocio(socioId: number): Promise<UsuarioDto> {
    const usuario = await this.usuarioRepository.findOne({
      where: { Socio: { idSocio: socioId } }, //Socio: variable de Usuario entity, idSocio: primarykey de Socio
      relations: ['Nadador', 'Socio'],
    });
    if (!usuario) {
      throw new NotFoundException(
        `Usuario asociado al nadador con ID ${socioId} no encontrado`,
      );
    }
    return this.entityToDto(usuario);
  }

  async findById(Id: number): Promise<UsuarioDto> {
    const usuario = await this.usuarioRepository.findOne({
      where: { IDUsuario: Id }, //Socio: variable de Usuario entity, idSocio: primarykey de Socio
      relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
    });
    if (!usuario) {
      throw new NotFoundException(
        `Usuario asociado al nadador con ID ${Id} no encontrado`,
      );
    }
    return this.entityToDto(usuario);
  }

  //Obtener todos los socios
  async findUsersSocios(): Promise<UsuarioDto[]> {
    const UsuarioEntities = await this.usuarioRepository.find({
      relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
      where: {
        Socio: Not(IsNull()),
      },
    });

    return this.entitysToDtos(UsuarioEntities);
  }

  //Obtener entrenadores

  async findUsersEntrenadores(): Promise<UsuarioDto[]> {
    const UsuarioEntities = await this.usuarioRepository.find({
      relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
      where: {
        Entrenador: Not(IsNull()),
      },
    });

    return this.entitysToDtos(UsuarioEntities);
  }

  async findUsersJunta(): Promise<UsuarioDto[]> {
    const UsuarioEntities = await this.usuarioRepository.find({
      relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
      where: {
        juntaDirectiva: Not(IsNull()),
      },
    });

    return this.entitysToDtos(UsuarioEntities);
  }

  async getAll(): Promise<UsuarioDto[]> {
    const UsuarioEntities = await this.usuarioRepository.find({
      relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
    });

    return this.entitysToDtos(UsuarioEntities);
  }

  //Obtener nadadores

  async findUsersNadadores(): Promise<UsuarioDto[]> {
    const UsuarioEntities = await this.usuarioRepository.find({
      relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
      where: {
        Nadador: Not(IsNull()),
      },
    });

    return this.entitysToDtos(UsuarioEntities);
  }

  //Autentificacion

  async findByNombre(nombre: string): Promise<UsuarioDto> {
    return this.entityToDto(
      await this.usuarioRepository.findOne({
        where: { Nombre: nombre },
        relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
      }),
    );
  }

  async findByDirecccion(dir: string): Promise<UsuarioDto> {
    return this.entityToDto(
      await this.usuarioRepository.findOne({
        where: { Direccion: dir },
        relations: ['Nadador', 'Entrenador', 'Socio', 'juntaDirectiva'],
      }),
    );
  }
}
