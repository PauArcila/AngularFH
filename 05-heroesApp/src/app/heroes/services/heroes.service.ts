import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url: string = environment.baseUrl;
  
  constructor(private  http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(this.url);
  }

  getHeroePorId(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(this.url+'/'+id);
  }
}
