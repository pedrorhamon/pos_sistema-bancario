import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContasService } from 'src/app/shared/contas.service';
import { Conta } from 'src/app/shared/model/conta';
import { SaqueDeposito } from 'src/app/shared/model/saque-deposito';
import { Transferencia } from 'src/app/shared/model/transferencia';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'numero', 'agencia', 'saldo', 'cliente', 'funcoes'];
  dataSource = new MatTableDataSource<Conta>;
  conta: Conta | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private contaService: ContasService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.listarContas(1, 5)
  }

  listarContas(page: number, pageSize: number) {
    this.contaService.listar_paginado(page, pageSize).subscribe(contas => {
      this.dataSource.data = contas;
    });
  }

  onPageChange(event: PageEvent) {
    const pageIndex = event.pageIndex + 1;
    const pageSize = event.pageSize;
    this.listarContas(pageIndex, pageSize);
  }

  deletarConta(id: number){
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      text: "Não tem como reverter essa ação",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contaService.deletar(id).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Conta deletado com sucesso!',
              showConfirmButton: false,
              timer: 1500
            })
            this.listarContas(1,5)
          },
          error: (error) => {
            console.error(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Erro ao deletar cliente!',
            })
          }})
      }})}


      editar(conta: Conta) {
        this.contaService.atualizar(conta).subscribe(
          (resultado) => {
            console.log(`Conta com ID ${resultado.id} foi atualizado com sucesso!`);
          },
          (erro) => {
            console.error(`Erro ao atualizar conta:`, erro);
          }
        );
      }

      realizarDeposito(conta: Conta, valor: number) {
        const deposito: SaqueDeposito = { valor }; // Crie um objeto de depósito com o valor
        this.contaService.deposito(conta.id, deposito).subscribe(
          (resultado) => {
            console.log(`Depósito de ${valor} realizado com sucesso na conta ${conta.numero}`);
            // Atualize a lista de contas após o depósito, se necessário
            this.listarContas(1, 5);
          },
          (erro) => {
            console.error(`Erro ao realizar depósito:`, erro);
          }
        );
      }

      realizarSaque(conta: Conta, valor: number) {
        const saque: SaqueDeposito = { valor };
        this.contaService.saque(conta.id, saque).subscribe(
          (resultado) => {
            console.log(`Saque de ${valor} realizado com sucesso na conta ${conta.numero}`);
            this.listarContas(1, 5);
          },
          (erro) => {
            console.error(`Erro ao realizar saque:`, erro);
          }
        );
      }

      realizarTransferencia(contaOrigem: Conta, contaDestino: Conta, valor: number) {
        const transferencia: Transferencia = {
          valor,
          conta_destino: contaDestino.id
        };
        this.contaService.transferencia(contaOrigem.id, transferencia).subscribe(
          (resultado) => {
            console.log(`Transferência de ${valor} realizada com sucesso da conta ${contaOrigem.numero} para ${contaDestino.numero}`);
            this.listarContas(1, 5);
          },
          (erro) => {
            console.error(`Erro ao realizar transferência:`, erro);
          }
        );
      }
}
