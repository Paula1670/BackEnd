import { CampeonatoEnum } from 'src/Constantes/CampeonatoEnum';
import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { GeneroEnum } from 'src/Constantes/GeneroEnum';
import { PiscinaEnum } from 'src/Constantes/PiscinaEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';

export class FiltrosTiempoDto {
  IDNadador: number;
  piscina?: PiscinaEnum;
  estilo?: EstiloEnum;
  prueba?: PruebaEnum;
  genero?: GeneroEnum;
  categoria?: number;
}
