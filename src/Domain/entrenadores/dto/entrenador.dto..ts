export class EntrenadorDto {
  idEntrenador: number;
  fechaContratacion: Date;
  especialidad: string;

  // nadadores: number[];

  constructor() {
    this.idEntrenador = 1;
    this.fechaContratacion = new Date();
    this.especialidad = '';

    //this.nadadores = [];
  }
}
