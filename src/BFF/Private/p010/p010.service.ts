import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { P010Get_ContratoDto } from './dto/P010Get_Contrato.dto';

@Injectable()
export class P010Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Contratos() {
    let resultado: P010Get_ContratoDto[] = [];
    const { data: contratos } = await this.httpClient.get(
      'http://localhost:3000/contratos/getAll/',
    );

    let nuevoContrato: P010Get_ContratoDto;

    for (let contrato of contratos) {
      const { data: cuotaDelContrato } = await this.httpClient.get(
        'http://localhost:3000/cuotasposibles/getById/' +
          contrato.CuotasPosibles,
      );

      const { data: Usuario } = await this.httpClient.get(
        'http://localhost:3000/users/findUserBySocioId/' + contrato.Socio,
      );

      nuevoContrato = {
        IDUsuario: Usuario.IDUsuario,
        IDCuota: cuotaDelContrato.IDCuota,
        NombreContrato: cuotaDelContrato.Nombre,
        FechaInicio: contrato.FechaInicio,
        FechaVencimiento: contrato.FechaVencimiento,
        Estado: contrato.Estado,
        Precio: cuotaDelContrato.Precio,
        NombreUsuario: Usuario.Nombre,
        ApellidoUsuario: Usuario.Apellido,
      };

      resultado.push(nuevoContrato);
    }

    return resultado;
  }

  async Delete_Contrato(id: number) {
    try {
      const { status, data } = await this.httpClient.delete(
        'http://localhost:3000/contratos/delete/' + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
