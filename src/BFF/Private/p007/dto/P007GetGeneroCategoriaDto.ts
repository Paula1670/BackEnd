import { CategoriaEnum } from 'src/Constantes/CategoriaEnum';
import { EstiloEnum } from 'src/Constantes/EstiloEnum';
import { GeneroEnum } from 'src/Constantes/GeneroEnum';
import { PiscinaEnum } from 'src/Constantes/PiscinaEnum';
import { PruebaEnum } from 'src/Constantes/PruebaEnum';
import { TemporadaEnum } from 'src/Constantes/TemporadaEnum';

export interface P007GetGeneroCategoriaDto {
  IDCategoria: number;
  Categoria: CategoriaEnum;
  Genero: GeneroEnum;
}
