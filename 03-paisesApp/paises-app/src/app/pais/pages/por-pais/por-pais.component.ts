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

  constructor(private paisService: PaisService) {
  }

  buscar() {
    console.log(this.termino);
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

}
