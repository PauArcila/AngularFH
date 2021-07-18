import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  @Input() nuevo: Personaje={
    nombre: '',
    poder: 0
  }

  @Output() onNewPersonaje: EventEmitter<Personaje> =  new EventEmitter();

  agregar(){
    console.log(this.nuevo);
    this.onNewPersonaje.emit(this.nuevo);
    this.nuevo = {nombre: '', poder: 0};
  }
}
