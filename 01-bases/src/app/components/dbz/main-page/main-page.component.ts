import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {nombre: 'Bulma', poder: 9000},
    {nombre: 'Androide 19', poder: 12300},
    {nombre: 'Goku', poder: 17000},
    {nombre: 'Vegeta', poder: 15000}
  ];

  nuevo: Personaje = {
    nombre: '', poder: 0
  }


  cambiarNom(event:any){
    console.log(event.target.value);
  }

  agregarNvoPersonaje(argumento: Personaje){
    console.log('main page component');
    this.personajes.push(argumento);
    console.table(this.personajes);
  }
}
