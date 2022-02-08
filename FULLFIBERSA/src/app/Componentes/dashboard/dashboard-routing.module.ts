import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogsDeCambioComponent } from '../logs-de-cambio/logs-de-cambio.component';
import { DashboardComponent } from './dashboard.component';
import { RegistrarCampanhasComponent } from './registrar-campanhas/registrar-campanhas.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children : [
      {path: 'ovas', component: RegistrarCampanhasComponent },
      {path: 'reporteLogs', component: LogsDeCambioComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
