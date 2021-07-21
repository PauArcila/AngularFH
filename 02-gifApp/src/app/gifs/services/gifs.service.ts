import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifResponse, Gif } from '../models/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 'bmk037fdFUnTAT7Xb7On39kiJ5SnugJ7';
  public resultados: Gif[] = [];// cambiar por tipo

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || []; // las 3 lineas de abajo se resumen acá
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse( localStorage.getItem('historial')!);
    // }
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    console.log(this._historial);

    this.http.get<SearchGifResponse>(`https://api.giphy.com/v1/gifs/search?api_key=bmk037fdFUnTAT7Xb7On39kiJ5SnugJ7&q=${query}&limit=10`)
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
}
