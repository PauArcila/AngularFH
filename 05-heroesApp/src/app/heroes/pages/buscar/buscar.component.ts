import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  terminoBuscado: string = '';
  heroes: Heroe[] = [];
  selectedHeroe!: Heroe ;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    
  }

  buscando() {
    this.heroesService.getSugerencias(this.terminoBuscado.trim())
      .subscribe(heroes => this.heroes = heroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    
    if(!event.option.value){
      //this.selectedHeroe = undefined;
      console.log('no hay valor');
      return;
    }
    
    const heroe: Heroe = event.option.value;
    this.terminoBuscado = heroe.superhero;
    
    this.heroesService.getHeroePorId(heroe.id!)
    .subscribe(heroe => this.selectedHeroe= heroe);
  }

}
