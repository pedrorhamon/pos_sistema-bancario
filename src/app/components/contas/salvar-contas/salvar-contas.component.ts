import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContasService } from 'src/app/shared/contas.service';
import { Conta } from 'src/app/shared/model/conta';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salvar-contas',
  templateUrl: './salvar-contas.component.html',
  styleUrls: ['./salvar-contas.component.css']
})
export class SalvarContasComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private contaService: ContasService, private router: Router) {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      numero: new FormControl('', Validators.required),
      agencia: new FormControl('', Validators.required),
      saldo: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {}

  cadastrar() {
    const conta: Conta = this.formGroup.value;
    this.contaService.salvarConta(conta).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Conta cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/contas'])
      },
      error: (error) => {
        console.error(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao cadastrar cliente!',
        })
      }})
  }
}
