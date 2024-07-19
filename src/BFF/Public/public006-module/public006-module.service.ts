import { Injectable } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { P006Get_TiempoDto } from '../public006-module/dto/P006Get_TiempoDto';

@Injectable()
export class Public006Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Records() {
    let records: P006Get_TiempoDto[] = [];

    const { data: tiempos } = await this.httpClient.get(
      'http://localhost:3000/tiempos/obtenerMenorTiempoPorFiltros/',
    );

    let nuevoRecord: P006Get_TiempoDto;

    for (let tiempo of tiempos) {
      const { data: categoria } = await this.httpClient.get(
        'http://localhost:3000/categorias/getById/' + tiempo.IDCategoria,
      );

      const { data: Usuario } = await this.httpClient.get(
        'http://localhost:3000/users/findUserByNadadorId/' + tiempo.IDNadador,
      );

      nuevoRecord = {
        Tiempo: tiempo.Tiempo,
        Temporada: tiempo.Temporada,
        Prueba: tiempo.Prueba,
        Piscina: tiempo.Piscina,
        Estilo: tiempo.Estilo,
        FechaMarcaNadador: tiempo.FechaMarcaNadador,

        NombreUsuario: Usuario.Nombre,
        ApellidoUsuario: Usuario.Apellido,

        NombreCategoria: categoria.NombreCategoria,
      };

      records.push(nuevoRecord);
    }
    return records;
  }
}
