import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth!}
  }

  constructor(private http: HttpClient) { }

  login(): Observable<Auth>{
    return this.http.get<Auth>(`${this.url}/usuarios/1`)
    .pipe(
      tap(auth => this._auth = auth)
    );
  }
}
