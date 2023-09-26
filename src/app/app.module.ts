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
import { ContaModule } from './pages/conta/conta.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ClienteModule,
    ContaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function provideNgxMask(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

