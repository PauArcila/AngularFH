import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Kallfucita';
  genero: string= 'femenino'; 
  invitaMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Kallfu', 'Fidel', 'Verona', 'Ayilen'];
 
  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.', 
    'other': 'tenemos # clientes esperando.'
  }
  
  quitarPersona(){
    if (this.clientes.length>0){
      this.clientes.pop();
    }
  }

  agregarPersona(){
      this.clientes.push('Domi');
  }

  cambiarPersona(){
      if(this.genero=='femenino'){
        this.nombre = 'Fidel';
        this.genero = 'masculino';
      }
      else{
        this.nombre = 'Kallfucita';
        this.genero = 'femenino';
      }     
  }

  //keyvalue
  persona = {
    nombre: 'Lilith',
    edad: 20,
    direccion: 'Santiasko'
  }

  //json pipe
  heroes = [
    {nombre: 'batman', vuela: true},
    {nombre: 'aquaman', vuela: false}
  ]
  
  //async pipe
  miObservable = interval(1000);
  
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  })


}
