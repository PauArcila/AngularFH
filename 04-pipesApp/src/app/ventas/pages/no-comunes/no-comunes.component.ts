import { Component } from '@angular/core';

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
  clientes: string[] = ['Kallfu', 'Fidel', 'Verona'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.', 
    'other': 'tenemos # clientes esperando.'
  }
}
