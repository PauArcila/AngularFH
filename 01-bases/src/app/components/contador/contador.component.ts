import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  ngOnInit(): void {
  }

  numero: number = 10;
  base:number = 10;

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
