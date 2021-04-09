import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './Usuario/crear/crear.component';
import { EditarComponent } from './Usuario/editar/editar.component';
import { ListadoComponent } from './Usuario/listado/listado.component';

const routes: Routes = [
  {path:'crear', component:CrearComponent},
  {path:'editar', component:EditarComponent},
  {path:'listado', component:ListadoComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
