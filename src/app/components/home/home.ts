import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  codigoBarras: string = '';
  valorUnitario: number = 0;
  quantidade: number = 1;
  totalItem: number = 0;
  totalRecebido: number = 0;
  troco: number = 0;
  produtos: Produto[] = [];
  adicionarProduto(): void {
    if (
      !this.codigoBarras.trim() ||
      this.valorUnitario <= 0 ||
      this.quantidade <= 0
    ) {
      console.warn(
        'Cannot add product: Missing barcode or invalid unit value/quantity.',
      );
      return;
    }

    const total = this.valorUnitario * this.quantidade;

    const novoProduto: Produto = {
      codigo: this.codigoBarras,
      descricao: `Produto ${this.produtos.length + 1}`,
      qtd: this.quantidade,
      valorUnitario: this.valorUnitario,
      total,
    };

    this.produtos.push(novoProduto);

    this.codigoBarras = '';
    this.valorUnitario = 0;
    this.quantidade = 1;
    this.totalItem = 0;

    if (this.totalRecebido > 0) {
      this.calcularTroco();
    }
  }

  calcularTotalItem(): void {
    this.totalItem = this.valorUnitario * this.quantidade;
  }

  get subtotal(): number {
    return this.produtos.reduce((sum, p) => sum + p.total, 0);
  }

  calcularTroco(): void {
    this.troco = this.totalRecebido - this.subtotal;
  }
}
