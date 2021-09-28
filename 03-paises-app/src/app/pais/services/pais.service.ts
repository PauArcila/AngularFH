import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CountryResponse } from '../interfaces/countryResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2'
 
  get httpParams (){
    return new HttpParams()
    .set('fields', 'name,capital,flag,population,alpha2Code,languages,currencies,translations,region');
  }
  
  constructor(private http: HttpClient) { }

  buscarPaisPorNombre(termino: string) : Observable<CountryResponse[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<CountryResponse[]>(url, { params: this.httpParams });
  }

  buscarPaisPorCapital(termino: string) : Observable<CountryResponse[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<CountryResponse[]>(url, { params: this.httpParams });
  }

  getCountryByAlpha(code: string){
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<CountryResponse>(url, { params: this.httpParams });
  }

  buscarPaisesRegion(region: string): Observable<CountryResponse[]>{
    //https://restcountries.com/v2/continent/europe
    //const url = `${this.apiUrl}/region/${region}`;
    const url = `${this.apiUrl}/continent/${region}`;
    return this.http.get<CountryResponse[]>(url, { params: this.httpParams })
    .pipe(
      tap(console.log)
    );
  }
  
}
