import { Component, Input} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent  {

 //@Input() personajes: Personaje[]=[];
  get personajes(){
    return this._dbzService.personajes;
  }

 constructor(private _dbzService: DbzService){

 }
}
