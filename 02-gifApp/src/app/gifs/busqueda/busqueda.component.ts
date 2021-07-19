import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})

export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;//not null assertion operator

  constructor(private _gifsService: GifsService){

  }
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);
    this._gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
