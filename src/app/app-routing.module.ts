import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClienteComponent } from './components/listagem-cliente/listagem-cliente.component';
import { SalvarClienteComponent } from './components/salvar-cliente/salvar-cliente.component';
import { ContasComponent } from './components/contas/contas.component';
import { SalvarContasComponent } from './components/contas/salvar-contas/salvar-contas.component';

const routes: Routes = [
  {
    path: 'clientes',
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
    path: 'contas',
    children: [
      {
        path: '',
        component: SalvarContasComponent
      },
      {
        path: 'contas/:id',
        component: SalvarClienteComponent
      },
      {
        path: 'id',
        component: ContasComponent
      },
      {
        path: 'id',
        component: ContasComponent
      },
      {
        path: 'id/deposito/',
        component: SalvarContasComponent
      },
      {
        path: 'id/saque/',
        component: SalvarContasComponent
      },
      {
        path: 'id/transferencia/',
        component: SalvarContasComponent
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
