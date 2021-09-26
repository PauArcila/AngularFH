import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.intefaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  enMayusculas: boolean = true;
  ordenarPor: string = '';
  
  heroes: Heroe[]=[
    { nombre: 'hulk', vuela: false, color: Color.verde},
    { nombre: 'batman', vuela: true, color: Color.negro},
    { nombre: 'blackwidow', vuela: false, color: Color.negro},
    { nombre: 'ironman', vuela: true, color: Color.rojo},
    { nombre: 'acquaman', vuela: false, color: Color.verde}
  ];

  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(nombreBoton: string){
     this.ordenarPor = nombreBoton;
  }


}
