import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.intefaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string): Heroe[] {
    
    switch (orderBy) {

      case 'nombre':
        return heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

      case 'vuela':
        return heroes.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);

      case 'color':
        return heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);

      default:
        return heroes;
    }
        
  }

}
