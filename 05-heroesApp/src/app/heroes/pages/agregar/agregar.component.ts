import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';

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
  constructor() { }

  ngOnInit(): void {
  }

}
