import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MarcasComponent } from '../components/marcas/marcas.component';
import { DelegacionesComponent } from '../components/delegaciones/delegaciones.component';
import { SecuenciasComponent } from '../components/secuencias/secuencias.component';
import { RncEstadoComponent } from '../components/rnc-estado/rnc-estado.component';
import { SelectComponent } from '../components/select/select.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MarcasService } from '../../services/marcas.service';
import { FiltradoPipe } from 'src/app/shared/pipe/filtrado.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    MarcasComponent,
    DelegacionesComponent,
    SecuenciasComponent,
    RncEstadoComponent,
    SelectComponent,
    FiltradoPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    // BrowserModule
  ],
  exports: [
    SelectComponent
  ],
  providers: [
    MarcasService
  ],
})
export class HomeModule { }
