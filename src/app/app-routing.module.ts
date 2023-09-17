import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClienteComponent } from './components/listagem-cliente/listagem-cliente.component';
import { SalvarClienteComponent } from './components/salvar-cliente/salvar-cliente.component';

const routes: Routes = [
  {
    path: 'cliente',
    children: [
      {
        path: 'novo',
        component: SalvarClienteComponent
      },
      {
        path: 'editar/:id',
        component: SalvarClienteComponent
      },
      {
        path: '',
        component: ListagemClienteComponent,
      },
    ]
  },
  {
    path: '',
    component: ListagemClienteComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
