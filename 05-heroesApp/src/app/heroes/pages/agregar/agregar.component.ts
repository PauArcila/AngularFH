import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators'

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
  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroePorId(id))
    )
    .subscribe((heroe) => this.heroe = heroe);
  }

  guardar(){
    //console.log(this.heroe);
    if(this.heroe.superhero.trim().length===0){
      return;
    }
    
    if(this.heroe.id){ //ACTUALIZAR
      this.heroesService.updateHeroe(this.heroe)
      .subscribe( heroe => console.log('actualizando', heroe));
    }
    else{//CREAR
      this.heroesService.createHeroe(this.heroe)
      .subscribe(heroe => {
        this.router.navigate(['/heroes', heroe.id ]);
      })
    }
  }

}
