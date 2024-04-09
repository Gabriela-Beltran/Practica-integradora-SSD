
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent  } from './vistas/inicio/inicio.component';

import {MineriaComponent  } from './vistas/mineria/mineria.component';

import {  ScoringComponent} from './vistas/scoring/scoring.component';

import { SimplexComponent } from './vistas/simplex/simplex.component';



const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'mineria', component: MineriaComponent },
  { path: 'scoring', component: ScoringComponent },
  { path: 'simplex', component: SimplexComponent },

  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }

 export const routingComponents =[
  InicioComponent,
  MineriaComponent,
  ScoringComponent,
  SimplexComponent
 ]
