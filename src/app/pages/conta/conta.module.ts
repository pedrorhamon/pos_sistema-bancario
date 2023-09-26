import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ContasComponent } from 'src/app/components/contas/contas.component';
import { SalvarContasComponent } from 'src/app/components/contas/salvar-contas/salvar-contas.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DepositoModalComponent } from 'src/app/shared/modal/deposito-modal/deposito-modal.component';
import { SaqueModalComponent } from 'src/app/shared/modal/saque-modal/saque-modal.component';
import { TransferenciaModalComponent } from 'src/app/shared/modal/transferencia-modal/transferencia-modal.component';



@NgModule({
  declarations: [
    ContasComponent,
    SalvarContasComponent,
    DepositoModalComponent,
    SaqueModalComponent,
    TransferenciaModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  exports: [
    ContasComponent,
    SalvarContasComponent,
    DepositoModalComponent,
    SaqueModalComponent,
    TransferenciaModalComponent
  ]

})
export class ContaModule { }
