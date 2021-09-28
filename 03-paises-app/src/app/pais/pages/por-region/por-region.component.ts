import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CountryResponse } from '../../interfaces/countryResponse.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  //regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionActiva: string = '';
  paises: CountryResponse[]=[];
  
  constructor(private paisService: PaisService) { }

  activarRegion(region: string){

    if(region === this.regionActiva){
      return;
    }
    else{
      this.regionActiva = region;
      this.paises = [];
  
      this.paisService.buscarPaisesRegion(region)
      .subscribe(paises => this.paises = paises);
    }
  }

  setCssBtn(region: string): string{
    return (region === this.regionActiva)? 'btn btn-secondary mr-1': 
    'btn btn-outline-secondary mr-1';
  }
}
