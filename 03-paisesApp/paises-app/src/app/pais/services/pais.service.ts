import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryResponse } from '../interfaces/countryResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2'
  
  constructor(private http: HttpClient) { 
    
  }

  buscarPaisPorNombre(termino: string) : Observable<CountryResponse[]>{
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<CountryResponse[]>(url);
  }

  buscarPaisPorCapital(termino: string) : Observable<CountryResponse[]>{
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<CountryResponse[]>(url);
  }
  
}
