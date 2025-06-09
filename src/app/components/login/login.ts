import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importa o Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  employeeCode: number | string = ''; // Adapte o tipo para aceitar number ou string
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    // Converta para string antes de usar trim()
    const employeeCodeAsString = String(this.employeeCode);

    if (employeeCodeAsString.trim() === '' || this.password.trim() === '') {
      console.warn('Por favor, preencha o código do funcionário e a senha.');
      return;
    }

    // Para a validação de comprimento e numérico, você também precisaria da string
    if (employeeCodeAsString.length > 8 || !/^\d+$/.test(employeeCodeAsString)) {
      console.warn(
        'O código do funcionário deve conter no máximo 8 dígitos e ser numérico.',
      );
      return;
    }

    console.log('Tentando fazer login com:');
    console.log(`Código do Funcionário: ${employeeCodeAsString}`);
    console.log(`Senha: ${this.password}`);

    if (employeeCodeAsString === '12345678' && this.password === 'senha123') {
      console.log('Login bem-sucedido!');
      this.router.navigate(['/home']);
    } else {
      console.error('Código do funcionário ou senha incorretos.');
    }
  }
}

