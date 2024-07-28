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

      nuevoContrato = {
        IDMiCuota: contrato.IDMiCuota,
        IDUsuario: Usuario.IDUsuario,
        IDCuota: cuotaDelContrato.IdCuota,
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

  /*
  async Get_ContratosBySocio(idSocio: string) {
    let resultado: P010Get_ContratoDto[] = [];

    // Obtener los contratos del socio especificado
    const { data: contratos } = await this.httpClient.get(
      `${BACK_END_URL}/contratos/getBySocio/${idSocio}`,
    );

    let nuevoContrato: P010Get_ContratoDto;

    for (let contrato of contratos) {
      // Obtener la cuota del contrato
      const { data: cuotaDelContrato } = await this.httpClient.get(
        `${BACK_END_URL}/cuotasposibles/getById/${contrato.CuotasPosibles}`,
      );

      // Obtener el usuario del contrato
      const { data: Usuario } = await this.httpClient.get(
        `${BACK_END_URL}/users/findUserBySocioId/${contrato.Socio}`,
      );

      nuevoContrato = {
        IDMiCuota: contrato.IDMiCuota,
        IDUsuario: Usuario.IDUsuario,
        IDCuota: cuotaDelContrato.IdCuota,
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
  }*/

  async Get_ContratosByUsuario(idUsuario: string) {
    let resultado: P010Get_ContratoDto[] = [];

    try {
      // Obtener el socio correspondiente al usuario especificado
      const { data: usuario } = await this.httpClient.get(
        `${BACK_END_URL}/users/getById/${idUsuario}`,
      );

      let idSocio = usuario?.Socio;

      if (!idSocio) {
        throw new Error(
          `No se encontró un socio para el usuario con ID ${idUsuario}`,
        );
      }

      // Obtener los contratos del socio especificado
      const { data: contratos } = await this.httpClient.get(
        `${BACK_END_URL}/contratos/getBySocio/${idSocio}`,
      );

      for (let contrato of contratos) {
        try {
          // Obtener la cuota del contrato
          const { data: cuotaDelContrato } = await this.httpClient.get(
            `${BACK_END_URL}/cuotasposibles/getById/${contrato.CuotasPosibles}`,
          );

          const nuevoContrato: P010Get_ContratoDto = {
            IDMiCuota: contrato.IDMiCuota,
            IDUsuario: usuario.IDUsuario,
            IDCuota: cuotaDelContrato.IdCuota,
            NombreContrato: cuotaDelContrato.Nombre,
            FechaInicio: contrato.FechaInicio,
            FechaVencimiento: contrato.FechaVencimiento,
            Estado: contrato.Estado,
            Precio: cuotaDelContrato.Precio,
            NombreUsuario: usuario.Nombre,
            ApellidoUsuario: usuario.Apellido,
          };

          resultado.push(nuevoContrato);
        } catch (innerError) {
          console.error(
            `Error obteniendo detalles del contrato ${contrato.IDMiCuota}:`,
            innerError,
          );
        }
      }
    } catch (error) {
      console.error('Error obteniendo contratos del usuario:', error);
    }

    return resultado;
  }
}
