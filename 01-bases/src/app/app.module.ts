import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { HeroeComponent } from './components/heroes/heroe/heroe.component';
import { ListadoComponent } from './components/heroes/listado/listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
