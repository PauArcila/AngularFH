import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

 nombreLower: string = 'paulilith';
 nombreUpper: string = 'PAULILITH';
 nombreCompleto: string = 'paU lilith';

 fecha: Date = new Date();
}
