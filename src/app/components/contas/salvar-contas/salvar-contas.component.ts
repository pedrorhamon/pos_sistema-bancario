import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/cliente.service';

@Component({
  selector: 'app-salvar-contas',
  templateUrl: './salvar-contas.component.html',
  styleUrls: ['./salvar-contas.component.css']
})
export class SalvarContasComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private clienteService: ClienteService, private router: Router) {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      numero: new FormControl('', Validators.required),
      agencia: new FormControl('', Validators.required),
      saldo: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }

}
