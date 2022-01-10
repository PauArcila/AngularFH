import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: '',
    precio: 0,
    existencias : 0

  }

 guardar(miFormulario: NgForm){
 // guardar(){
    //console.log(miFormulario.form.value);
    console.log(this.miFormulario);
    this.miFormulario.resetForm();
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid 
      && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.touched 
      && this.miFormulario?.controls.precio.value<=0;
  }

}
