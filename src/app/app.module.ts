import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './Usuario/listado/listado.component';
import { EditarComponent } from './Usuario/editar/editar.component';
import { CrearComponent } from './Usuario/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    EditarComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
