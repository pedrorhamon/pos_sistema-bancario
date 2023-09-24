import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';
import { ContasService } from '../../contas.service';
import { MatDialog } from '@angular/material/dialog';
import { SaqueDeposito } from '../../model/saque-deposito';

@Component({
  selector: 'app-deposito-modal',
  templateUrl: './deposito-modal.component.html',
  styleUrls: ['./deposito-modal.component.css']
})
export class DepositoModalComponent {

  valor!: SaqueDeposito;

  constructor(private dialog: MatDialog, private contaService: ContasService) { }

  abrirModalDeposito() {
    const dialogRef = this.dialog.open(DepositoModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Este é o código que será executado após o modal ser fechado
      if (result) {
        // Aqui você pode chamar o serviço de depósito com os dados do modal
        const idConta = 1; // Substitua pelo ID da conta
        this.deposito(idConta, result);
      }
    });
  }

  deposito(id: number, valor: number): void {
    this.contaService.deposito(id, valor).subscribe(
      resposta => {
        console.log('Depósito realizado com sucesso!', resposta);
        // Faça qualquer outra ação que você deseja após o depósito
      },
      erro => {
        console.error('Erro ao realizar depósito:', erro);
        // Trate o erro conforme necessário
      }
    );
  }

}
