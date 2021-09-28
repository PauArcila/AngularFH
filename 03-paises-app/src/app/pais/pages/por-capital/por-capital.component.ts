import { Component, OnInit } from '@angular/core';
import { CountryResponse } from '../../interfaces/countryResponse.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: CountryResponse[]=[];
  title: string = 'Capital';

  constructor(private paisService: PaisService) {
  }

  buscar( termino: string) {
    console.log(this.termino);
    this.termino=termino;
    this.paisService.buscarPaisPorCapital(this.termino)
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

  

}
