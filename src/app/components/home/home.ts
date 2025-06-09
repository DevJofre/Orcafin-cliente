import { CommonModule, NgFor, CurrencyPipe } from '@angular/common'; // Removido NgIf
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBar } from '../nav-bar/nav-bar';


interface Produto {
  codigo: string;
  descricao: string;
  qtd: number;
  valorUnitario: number;
  total: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,NavBar], // NgIf já está disponível via CommonModule
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  codigoBarras: string = '';
  valorUnitario: number = 0;
  totalItem: number = 0;
  subtotal: number = 0;
  totalRecebido: number = 0;
  troco: number = 0;

  produtos: Produto[] = [];

  showAdminCodeModal: boolean = false;
  adminCodeInput: string = '';
  productIndexToRemove: number | null = null;
  adminCodeMessage: string = '';

  constructor() {}

  ngOnInit(): void {
    this.calcularSubtotal();
  }

  adicionarProduto(): void {
    if (!this.codigoBarras || this.valorUnitario <= 0) {
      console.warn('Por favor, preencha o código de barras e o valor unitário.');
      return;
    }

    const novoProduto: Produto = {
      codigo: this.codigoBarras,
      descricao: `Produto ${this.codigoBarras}`,
      qtd: 1,
      valorUnitario: this.valorUnitario,
      total: this.valorUnitario,
    };

    this.produtos.push(novoProduto);
    this.calcularSubtotal();
    this.resetarCamposItem();
  }

  calcularTotalItem(): void {
    this.totalItem = this.valorUnitario;
  }

  removerProduto(index: number): void {
    this.productIndexToRemove = index;
    this.adminCodeInput = '';
    this.adminCodeMessage = '';
    this.showAdminCodeModal = true;
    console.log('Abrindo modal de código admin. showAdminCodeModal:', this.showAdminCodeModal);
  }

  confirmAdminCode(): void {
    const correctAdminCode = '1234';

    if (this.adminCodeInput === correctAdminCode) {
      if (this.productIndexToRemove !== null) {
        this.produtos.splice(this.productIndexToRemove, 1);
        this.calcularSubtotal();
        this.calcularTroco();
        console.log(`Produto no índice ${this.productIndexToRemove} removido com código admin.`);
      }
      this.showAdminCodeModal = false;
      this.productIndexToRemove = null;
      this.adminCodeMessage = '';
    } else {
      this.adminCodeMessage = 'Código de administrador incorreto.';
      console.warn('Tentativa de remoção: Código de administrador incorreto.');
    }
  }

  cancelAdminCodeInput(): void {
    this.showAdminCodeModal = false;
    this.adminCodeInput = '';
    this.productIndexToRemove = null;
    this.adminCodeMessage = '';
    console.log('Remoção de produto cancelada.');
  }

  calcularSubtotal(): void {
    this.subtotal = this.produtos.reduce((sum, p) => sum + p.total, 0);
  }

  calcularTroco(): void {
    this.troco = this.totalRecebido - this.subtotal;
  }

  resetarCamposItem(): void {
    this.codigoBarras = '';
    this.valorUnitario = 0;
    this.totalItem = 0;
  }
}
