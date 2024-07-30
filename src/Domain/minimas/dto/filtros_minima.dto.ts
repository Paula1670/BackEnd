import { CampeonatoEnum } from 'src/Constantes/CampeonatoEnum';
import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { GeneroEnum } from 'src/Constantes/GeneroEnum';
import { PiscinaEnum } from 'src/Constantes/PiscinaEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';

export class FiltrosMinimaDto {
  year?: number;
  temporada?: TemporadaEnum;
  piscina?: PiscinaEnum;
  estilo?: EstiloEnum;
  prueba?: PruebaEnum;
  genero?: GeneroEnum;
  categoria?: number;
  campeonato?: CampeonatoEnum;
}
