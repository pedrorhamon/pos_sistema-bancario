import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContasComponent } from './components/contas/contas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClienteModule } from './pages/cliente/cliente.module';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
    ClienteModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideNgxMask(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

