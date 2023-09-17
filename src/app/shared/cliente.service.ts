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

listar_paginado(page: number, pageSize: number): Observable<Cliente[]> {
  return this.httpCliente
  .get<Cliente[]>(`${this.api}?page=${page}&pageSize=${pageSize}`);
}


deletar(idCliente: number): Observable<object> {
  return this.httpCliente.delete(`${this.api}${idCliente}`);
}


pesquisarPorId(id: number): Observable<Cliente> {
  return this.httpCliente.get<Cliente>(`${this.api}${id}`);
}


atualizar(cliente: Cliente): Observable<Cliente> {
  return this.httpCliente.put<Cliente>(`${this.api}${cliente.id}`, cliente);
}
}
