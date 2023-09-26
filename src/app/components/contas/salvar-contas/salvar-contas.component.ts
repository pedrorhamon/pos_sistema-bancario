import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/cliente.service';
import { ContasService } from 'src/app/shared/contas.service';
import { Cliente } from 'src/app/shared/model/cliente';
import { Conta } from 'src/app/shared/model/conta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salvar-contas',
  templateUrl: './salvar-contas.component.html',
  styleUrls: ['./salvar-contas.component.css']
})
export class SalvarContasComponent implements OnInit {
  editar;
  formGroup: FormGroup;
  clientes: Cliente[]


  constructor(private clienteService: ClienteService, private contaService: ContasService, private router: Router, private route: ActivatedRoute){
    this.editar = false
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      numero: new FormControl('', Validators.required),
      agencia: new FormControl('', Validators.required),
      saldo: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required)
    });
    this.clientes = []
  }


  ngOnInit(): void {
    if (this.route.snapshot.params["id"]){
      this.editar = true
      this.contaService.pesquisarPorId(this.route.snapshot.params["id"]).subscribe(
        cliente => {
          this.formGroup.patchValue(cliente)
        }
      )
    }
    this.listarClientes()
  }


  listarClientes(): void{
    this.clienteService.listarCliente().subscribe(values => {
      this.clientes = values
    })
  }




  cadastrar() {
    const conta: Conta = this.formGroup.value;
    if (this.editar) {
      this.contaService.atualizar(conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Conta atualizada com sucesso!',
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
            text: 'Erro ao atualizar conta!',
          });
        }
      });
    } else {
      // Modo de criação
      this.contaService.salvarConta(conta).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso',
            text: 'Conta cadastrada com sucesso!',
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
            text: 'Erro ao cadastrar conta!',
          });
        }
      });
    }
  }
}
