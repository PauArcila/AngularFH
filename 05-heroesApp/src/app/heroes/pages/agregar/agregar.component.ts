import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    { id: Publisher.DCComics, desc: 'DC - Comics'},
    { id: Publisher.MarvelComics, desc: 'Marvel - Comics'}
  ]

  heroe: Heroe = {
    id: '',
    superhero: '',
    publisher: Publisher.MarvelComics,
    alter_ego: '',
    first_appearance: '',
    characters: ''
  }
  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar(){
    //console.log(this.heroe);
    if(this.heroe.superhero.trim().length===0){
      return;
    }
    this.heroesService.createHeroe(this.heroe)
    .subscribe(resp => console.log('Respuesta: ', resp));
  }

}
