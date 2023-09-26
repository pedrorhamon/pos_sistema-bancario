import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemClienteComponent } from './components/listagem-cliente/listagem-cliente.component';
import { SalvarClienteComponent } from './components/salvar-cliente/salvar-cliente.component';
import { ContasComponent } from './components/contas/contas.component';
import { SalvarContasComponent } from './components/contas/salvar-contas/salvar-contas.component';
import { DepositoModalComponent } from './shared/modal/deposito-modal/deposito-modal.component';
import { SaqueModalComponent } from './shared/modal/saque-modal/saque-modal.component';
import { TransferenciaModalComponent } from './shared/modal/transferencia-modal/transferencia-modal.component';

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
        component: ContasComponent
      },
      {
        path: 'novo',
        component: SalvarContasComponent
      },
      {
        path: 'editar/:id',
        component: SalvarClienteComponent
      },
      {
        path: 'deposito/',
        component: DepositoModalComponent
      },
      {
        path: ':saque/',
        component: SaqueModalComponent
      },
      {
        path: 'transferencia/',
        component: TransferenciaModalComponent
      },
      {
        path: '',
        component: ContasComponent
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
