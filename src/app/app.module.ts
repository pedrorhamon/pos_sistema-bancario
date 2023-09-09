import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListagemClienteComponent } from './components/listagem-cliente/listagem-cliente.component';
import { SalvarClienteComponent } from './components/salvar-cliente/salvar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListagemClienteComponent,
    SalvarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
