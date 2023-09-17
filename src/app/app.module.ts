import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartoesComponent } from './components/cartoes/cartoes.component';
import { ListagemClienteComponent } from './components/listagem-cliente/listagem-cliente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SalvarClienteComponent } from './components/salvar-cliente/salvar-cliente.component';
import { MaterialModule } from './shared/material/material.module';

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
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
