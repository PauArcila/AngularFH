import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from './components/contador/contador.module';
//import { ContadorComponent } from './components/contador/contador.component';
import { HeroesModule } from './components/heroes/heroes.module';
import { DbzModule } from './components/dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
 //   ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
