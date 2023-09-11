import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Cliente } from './model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpCliente: HttpClient) { }

  listarCliente(): Subscriber<Cliente[]> {
    return this.httpCliente.get<Cliente[]>(`$`);
  }
}
