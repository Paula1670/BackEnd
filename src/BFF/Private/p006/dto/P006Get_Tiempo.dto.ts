import { CategoriaEnum } from 'src/Constantes/CategoriaEnum';
import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { PiscinaEnum } from 'src/Constantes/PiscinaEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';

export class P006Get_TiempoDto {
  Tiempo: string;
  Temporada: TemporadaEnum;
  Prueba: PruebaEnum;
  Piscina: PiscinaEnum;
  Categoria: CategoriaEnum;
  Estilo: EstiloEnum;
  CumpleMinima: boolean;
  IDCategoria: number;
  IDUsuario: number;
  Nombre: string;
  Apellido: string;
  IDTiempo: number;
  FechaMarcaNadador: Date;
}
