import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.intefaces';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(colorNumber: number): string {
    
    switch (colorNumber) {

      case 0:
        return 'rojo';

      case 1:
        return 'negro';

      case 2:
        return 'azul';

      case 3:
        return 'verde';

      default:
        return 'blanco';
    }
        
  }

}
