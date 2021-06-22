import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'bases app';
  numero: number = 10;

  sumar() {
    this.numero += 1;
  }

  restar() {
    if (this.numero > 0) {
      this.numero -= 1;
    }
  }

  acumular(valor: number) {
    if (this.numero > 0) {
      this.numero += valor;
    }
  }

}
