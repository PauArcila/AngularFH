import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`li {cursor: pointer;}`]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: CountryResponse[] = [];
  title: string = 'País';
  paisesSugeridos: CountryResponse[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) {
  }

  buscar(termino: string) {
    console.log(this.termino);
    this.mostrarSugerencias = false;
    this.termino = termino;
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

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPaisPorNombre(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 5),
        (err) => this.paisesSugeridos = []
      );
  }

}
