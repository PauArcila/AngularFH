import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: CountryResponse[]=[];
  title: string = 'País';
  
  constructor(private paisService: PaisService) {
  }

  buscar( termino: string) {
    console.log(this.termino);
    this.termino=termino;
    this.paisService.buscarPaisPorNombre(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
        this.hayError = false;
      },
        (err) => {
          console.log('Error', err);
          this.hayError = true;
          this.paises = [];
        }
      );
  }

  sugerencias(termino: string){
    this.hayError=false;
    //TODO: crear sugerencias
  }

}
