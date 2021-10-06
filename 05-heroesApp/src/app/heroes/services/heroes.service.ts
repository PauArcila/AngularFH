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
    return this.http.get<Heroe[]>(this.url+'/heroes/');
  }

  getHeroePorId(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(this.url+'/heroes/'+id);
  }

  getSugerencias(terminoBuscado: string): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(this.url+'/heroes?q='+terminoBuscado+'&_limit=6');
  }

  createHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(this.url+'/heroes', heroe);
  }

  updateHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(this.url+'/heroes/'+heroe.id, heroe);
  }

  deleteHeroe(id: string): Observable<any>{
    return this.http.delete<Heroe>(this.url+'/heroes/'+id);
  }
}
