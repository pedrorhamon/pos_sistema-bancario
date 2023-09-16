import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SalvarClienteComponent } from './components/salvar-cliente/salvar-cliente.component';
import { ListagemClienteComponent } from './components/listagem-cliente/listagem-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { CartoesComponent } from './components/cartoes/cartoes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SalvarClienteComponent,
    ListagemClienteComponent,
    CartoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
