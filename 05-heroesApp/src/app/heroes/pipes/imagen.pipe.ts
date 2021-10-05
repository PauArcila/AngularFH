import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    console.log('pipe imagen en proceso');
    
    if (!heroe.id && !heroe.alt_img) {
      return 'assets/img/no-image.png';
    }
    else if (heroe.alt_img) {
      return heroe.alt_img;
    }
    else {
      return `assets/img/heroes/${heroe.id}.jpg`;
    }
    
  }

}
