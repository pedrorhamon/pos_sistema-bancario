import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClienteService } from '../../cliente.service';
import { Conta } from '../../model/conta';
import { Transferencia } from '../../model/transferencia';
import { ContasService } from '../../contas.service';

@Component({
  selector: 'app-transferencia-modal',
  templateUrl: './transferencia-modal.component.html',
  styleUrls: ['./transferencia-modal.component.css']
})
export class TransferenciaModalComponent {
  formGroup: FormGroup;
  contas: Conta[]

  constructor(private contaService: ContasService, private router: Router, private clienteService: ClienteService){

    this.formGroup = new FormGroup({
      valor: new FormControl('', Validators.required),
      conta_destino: new FormControl('', Validators.required),
      conta_origem: new FormControl('', Validators.required)
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
    const tranferencia: Transferencia = this.formGroup.value;
      this.contaService.transferencia(tranferencia).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Transferência registrada com sucesso!',
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
            text: 'Erro ao registrar transferência!',
          });
        }
      });
    }

}
