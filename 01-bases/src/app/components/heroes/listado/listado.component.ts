import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent  {

  heroes: string[]=['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado:string = '';

  eliminarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
