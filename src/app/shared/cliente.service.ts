import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api = `${environment.api}/clientes/`;

  constructor(private httpCliente: HttpClient) { }

  listarCliente(): Observable<Cliente[]> {
    return this.httpCliente.get<Cliente[]>(this.api);
  }

  salvarCliente(novoCliente: Cliente): Observable<Cliente> {
    return this.httpCliente.post<Cliente>(
      this.api, novoCliente);  }

  atualizarCliente(id: number): Subscriber<Cliente> {
    return this.httpCliente.put<Cliente>(`${environment.api}/${id}`);
  }
}
