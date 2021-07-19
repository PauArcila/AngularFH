import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  
  private _personajes: Personaje[] = [
    { nombre: 'Bulma', poder: 9000 },
    { nombre: 'Androide 19', poder: 12300 },
    { nombre: 'Goku', poder: 17000 },
    { nombre: 'Vegeta', poder: 15000 }
  ];

  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  constructor() { 
    console.log('servicio dbz inicializado');
  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje);
  }
}
