import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';
import { ContasService } from '../../contas.service';
import { MatDialog } from '@angular/material/dialog';
import { SaqueDeposito } from '../../model/saque-deposito';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClienteService } from '../../cliente.service';
import { Conta } from '../../model/conta';

@Component({
  selector: 'app-deposito-modal',
  templateUrl: './deposito-modal.component.html',
  styleUrls: ['./deposito-modal.component.css']
})
export class DepositoModalComponent implements OnInit{
  formGroup: FormGroup;
  contas: Conta[]

  constructor(private contaService: ContasService, private router: Router, private clienteService: ClienteService){

    this.formGroup = new FormGroup({
      valor: new FormControl('', Validators.required),
      conta: new FormControl('', Validators.required)
    });
    this.contas = []
  }
  ngOnInit(): void {
    this.listarContas()
  }

  listarContas(): void{
    this.contaService.listarContas().subscribe(contas => {
      this.clienteService.listarCliente().subscribe(clientes => {
        const contasComNomesDeClientes = contas.map(conta => {
          const cliente = clientes.find(cliente => cliente.id === conta.cliente);
          if (cliente) {
            conta.nomeCliente = cliente.nome;
          }
          return conta;
        });
        this.contas = contasComNomesDeClientes;
      });
    })
  }

  cadastrar() {
    const deposito: SaqueDeposito = this.formGroup.value.valor;
      // Modo de criação
      this.contaService.deposito(deposito).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Depósito registrado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/conta']);
        },
        error: (error) => {
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Erro ao registrar depósito!',
          });
        }
      });
    }
}
