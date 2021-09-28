import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { CountryResponse } from '../../interfaces/countryResponse.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: CountryResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getCountryByAlpha(id)),
      tap(console.log)
    )
    .subscribe( pais => { 
      this.pais = pais;
      console.log(pais);
    });

      // .subscribe(({id}) => {
      //   console.log(id);

      //   this.paisService.getCountryByAlpha(id)
      //   .subscribe(pais=>{
      //     console.log(pais);
      //   })
      // });
  }

}
