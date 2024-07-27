import { Injectable, NotFoundException } from '@nestjs/common';
import { HttpClientService } from '@tresdoce/nestjs-httpclient';
import { P010Get_ContratoDto } from './dto/P010Get_Contrato.dto';
import { BACK_END_URL } from 'src/Constantes/enviroment';

@Injectable()
export class P010Service {
  constructor(private readonly httpClient: HttpClientService) {}

  async Get_Contratos() {
    let resultado: P010Get_ContratoDto[] = [];
    const { data: contratos } = await this.httpClient.get(
      `${BACK_END_URL}/contratos/getAll/`,
    );

    let nuevoContrato: P010Get_ContratoDto;

    for (let contrato of contratos) {
      const { data: cuotaDelContrato } = await this.httpClient.get(
        `${BACK_END_URL}/cuotasposibles/getById/` + contrato.CuotasPosibles,
      );

      const { data: Usuario } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUserBySocioId/` + contrato.Socio,
      );
      console.log(cuotaDelContrato);
      nuevoContrato = {
        IDMiCuota: contrato.IDMiCuota,
        IDUsuario: Usuario.IDUsuario,
        tipoCuota: cuotaDelContrato.IdCuota,
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
        `${BACK_END_URL}/contratos/delete/` + id,
      );

      return data;
    } catch (error) {
      return error;
    }
  }
}
