import { Component, Input } from '@angular/core';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})
export class PaisTablaComponent  {

  @Input() paises: CountryResponse[] = [];

}
