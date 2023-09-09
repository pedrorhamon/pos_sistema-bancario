import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClienteComponent } from './components/listagem-cliente/listagem-cliente.component';

const routes: Routes = [
  {
    path: "clientes",
    component: ListagemClienteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
