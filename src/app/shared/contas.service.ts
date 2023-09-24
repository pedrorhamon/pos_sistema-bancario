import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Conta } from './model/conta';
import { Transferencia } from './model/transferencia';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  api = `${environment.api}/contas/`;

  constructor(private httpCliente: HttpClient) { }

  // Método para realizar um saque em uma conta
  saque(conta: Conta, valor: number): Observable<any> {
    return this.httpCliente.post(`${this.api}/${conta.id}/saque`, { valor });
  }

  // Método para realizar um depósito em uma conta
  deposito(conta: Conta, valor: number): Observable<any> {
    return this.httpCliente.post(`${this.api}/${conta.id}/deposito`, { valor });
  }

  transferencia(conta: Conta, transferencia: Transferencia): Observable<any> {
    return this.httpCliente.post(`${this.api}/${conta.id}/transferencia`, transferencia);
  }

  listarContas(): Observable<Conta[]> {
    return this.httpCliente.get<Conta[]>(this.api);
  }

  salvarConta(novaConta: Conta): Observable<Conta> {
    return this.httpCliente.post<Conta>(
      this.api, novaConta);
  }

  listar_paginado(page: number, pageSize: number): Observable<Conta[]> {
    return this.httpCliente
    .get<Conta[]>(`${this.api}?page=${page}&pageSize=${pageSize}`);
  }


  deletar(idConta: number): Observable<object> {
    return this.httpCliente.delete(`${this.api}${idConta}`);
  }


  pesquisarPorId(id: number): Observable<Conta> {
    return this.httpCliente.get<Conta>(`${this.api}/${id}`);
  }

  atualizar(conta: Conta): Observable<Conta> {
    return this.httpCliente.put<Conta>(`${this.api}${conta.id}`, conta);
  }
}
