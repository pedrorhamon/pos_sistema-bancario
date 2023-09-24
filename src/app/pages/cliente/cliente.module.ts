import { SalvarClienteComponent } from './../../components/salvar-cliente/salvar-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ListagemClienteComponent } from 'src/app/components/listagem-cliente/listagem-cliente.component';
import { MaterialModule } from 'src/app/shared/material/material.module';



@NgModule({
  declarations: [
    SalvarClienteComponent,
    ListagemClienteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
   ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideNgxMask()],
  exports: []
})

export class ClienteModule { }
