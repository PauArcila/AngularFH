import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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
  constructor(private _dbzService: DbzService){}

  //@Output() onNewPersonaje: EventEmitter<Personaje> =  new EventEmitter();

  agregar(){
    console.log(this.nuevo);
    this._dbzService.agregarPersonaje(this.nuevo);
    //this.onNewPersonaje.emit(this.nuevo);//paso el objeto nuevo al evento y lo emito
    this.nuevo = {nombre: '', poder: 0};
  }
}
