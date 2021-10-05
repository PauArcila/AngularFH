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

  getSugerencias(terminoBuscado: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(this.url+'?q='+terminoBuscado+'&_limit=6');
  }

  createHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(this.url, heroe);
  }

  updateHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(this.url+'/'+heroe.id, heroe);
  }

  deleteHeroe(id: string): Observable<any>{
    return this.http.delete<Heroe>(this.url+'/'+id);
  }
}
