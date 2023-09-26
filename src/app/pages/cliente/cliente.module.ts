import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ListagemClienteComponent } from 'src/app/components/listagem-cliente/listagem-cliente.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { SalvarClienteComponent } from './../../components/salvar-cliente/salvar-cliente.component';



@NgModule({
  declarations: [
    SalvarClienteComponent,
    ListagemClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports: []
})

export class ClienteModule { }
