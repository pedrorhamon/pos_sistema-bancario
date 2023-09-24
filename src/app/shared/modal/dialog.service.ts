import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepositoModalComponent } from './deposito-modal/deposito-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  abrirModalDeposito(): void {
    this.dialog.open(DepositoModalComponent, {
      width: '400px'
    });
  }
}
