import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrarCampanhasComponent } from './registrar-campanhas/registrar-campanhas.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    RegistrarCampanhasComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CompartidosModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
