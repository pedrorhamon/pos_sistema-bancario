import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClienteModule } from './pages/cliente/cliente.module';
import { MaterialModule } from './shared/material/material.module';
import { DepositoModalComponent } from './shared/modal/deposito-modal/deposito-modal.component';
import { SaqueModalComponent } from './shared/modal/saque-modal/saque-modal.component';
import { TransferenciaModalComponent } from './shared/modal/transferencia-modal/transferencia-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SaqueModalComponent,
    TransferenciaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ClienteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideNgxMask(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

