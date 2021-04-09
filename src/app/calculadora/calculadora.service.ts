import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  operacion: string[] = [];
  contadorPosicion: number;

  constructor(
    ) {
    this.contadorPosicion = 0
  }
  updateContador(){
    this.operacion[this.contadorPosicion + 1] = "";
    this.contadorPosicion = this.operacion.length - 1

  }

  addValOperacion(numero:string){
    this.operacion[this.contadorPosicion] = numero
    this.updateContador
  }

}
