import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    pantalla: string = '0';

    agregarNumero(numero: number) {
        if (this.pantalla === '0' || this.pantalla === 'ERROR')
            this.pantalla = numero.toString();
        else
            this.pantalla += numero;
    }

    agregarOperador(operador: string) {
        if (!isNaN(parseInt(this.pantalla[this.pantalla.length - 1])) || this.pantalla === 'ERROR')
            this.pantalla += operador;
    }

    agregarPunto() {
        if (!this.pantalla.includes('.') && !this.pantalla.includes('+') && !this.pantalla.includes('-') &&
            !this.pantalla.includes('*') && !this.pantalla.includes('/'))
            this.pantalla += '.';
    }

    borrarPantalla() {
        this.pantalla = '0';
    }

    borrarUltimoCaracter() {
        if (this.pantalla.length === 1 || this.pantalla === 'ERROR')
            this.pantalla = '0';
        else
            this.pantalla = this.pantalla.slice(0, -1);
    }

    calcularResultado() {
        try {
            let res = eval(this.pantalla);
            this.pantalla = res.toString();
        } catch {
            this.pantalla = "ERROR";
          }
      }
  }
