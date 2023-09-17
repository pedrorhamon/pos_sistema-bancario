import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/cliente.service';
import { Cliente } from 'src/app/shared/model/cliente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-salvar-cliente',
  templateUrl: './salvar-cliente.component.html',
  styleUrls: ['./salvar-cliente.component.css']
})
export class SalvarClienteComponent implements OnInit {

  formGroup: FormGroup;


  constructor(private clienteService: ClienteService, private router: Router){
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      nome: new FormControl('', Validators.required),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      observacoes: new FormControl('', Validators.required),
      ativo: new FormControl(true)
    });
  }


  ngOnInit(): void {

  }


  cadastrar() {
    const cliente: Cliente = this.formGroup.value;
    this.clienteService.(cliente).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Sucesso',
          text: 'Cliente cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/cliente'])
      },
      error: (error: any) => {
        console.error(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao cadastrar cliente!',
        })
      }})
  }
}
