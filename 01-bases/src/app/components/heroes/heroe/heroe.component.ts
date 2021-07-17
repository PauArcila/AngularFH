import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent  {
  
  title: string = 'app-heroe';
  nombre: string = 'Ironman';
  edad: number = 45;

  obtenerNombre(): string{
    return  `${this.nombre}`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

}
