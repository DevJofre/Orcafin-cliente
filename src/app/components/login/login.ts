import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importa o Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  employeeCode: string = '';
  password: string = '';

  // Injeta o serviço Router no construtor
  constructor(private router: Router) {}

  login(): void {
    if (this.employeeCode.trim() === '' || this.password.trim() === '') {
      console.warn('Por favor, preencha o código do funcionário e a senha.');
      return;
    }

    if (this.employeeCode.length > 8 || !/^\d+$/.test(this.employeeCode)) {
      console.warn('O código do funcionário deve conter no máximo 8 dígitos e ser numérico.');
      return;
    }

    console.log('Tentando fazer login com:');
    console.log(`Código do Funcionário: ${this.employeeCode}`);
    console.log(`Senha: ${this.password}`);

    if (this.employeeCode === '12345678' && this.password === 'senha123') {
      console.log('Login bem-sucedido!');
      // Redireciona para o componente Home após o login bem-sucedido
      this.router.navigate(['/home']);
    } else {
      console.error('Código do funcionário ou senha incorretos.');
    }
  }
}
