import { SalvarClienteComponent } from './../../components/salvar-cliente/salvar-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ContasComponent } from 'src/app/components/contas/contas.component';
import { SalvarContasComponent } from 'src/app/components/contas/salvar-contas/salvar-contas.component';
import { ListagemClienteComponent } from 'src/app/components/listagem-cliente/listagem-cliente.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DepositoModalComponent } from 'src/app/shared/modal/deposito-modal/deposito-modal.component';



@NgModule({
  declarations: [
    SalvarClienteComponent,
    ListagemClienteComponent,
    ContasComponent,
    SalvarContasComponent,
    DepositoModalComponent
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
