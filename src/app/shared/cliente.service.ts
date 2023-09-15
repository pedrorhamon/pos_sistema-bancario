import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Cliente } from './model/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpCliente: HttpClient) { }

  listarCliente(): Subscriber<Cliente[]> {
    return this.httpCliente.get<Cliente[]>(`${environment.api}\clienteas`);
  }
}
