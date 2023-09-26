import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { ClienteService } from '../../cliente.service';
import { ContasService } from '../../contas.service';
import { Conta } from '../../model/conta';
import { SaqueDeposito } from '../../model/saque-deposito';

@Component({
  selector: 'app-saque-modal',
  templateUrl: './saque-modal.component.html',
  styleUrls: ['./saque-modal.component.css']
})
export class SaqueModalComponent implements OnInit {

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
    const saque: SaqueDeposito = this.formGroup.value;
      // Modo de criação
      this.contaService.saque(saque).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Saque registrado com sucesso!',
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
            text: 'Erro ao registrar saque!',
          });
        }
      });
    }

}
