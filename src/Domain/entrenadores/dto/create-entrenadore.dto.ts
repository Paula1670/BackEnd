export class CreateEntrenadoreDto {
  fechaContratacion: Date;
  especialidad: string;

  //nadadores: number[];

  constructor() {
    this.fechaContratacion = new Date();
    this.especialidad = '';

    //this.nadadores = [];
  }
}
