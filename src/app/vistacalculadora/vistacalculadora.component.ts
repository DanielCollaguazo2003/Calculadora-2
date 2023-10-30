import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vistacalculadora',
  templateUrl: './vistacalculadora.component.html',
  styleUrls: ['./vistacalculadora.component.css'],
})
export class VistacalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  suma: number = 0;
  resta: number = 0;
  multiplicacion: number = 0;
  division: number = 0;
  resultado: boolean = false;

  constructor(private router: Router) {}

  calcularOperaciones() {
    if (!isNaN(this.numero1) && !isNaN(this.numero2)) {
      this.suma = +this.numero1 + +this.numero2;
      this.resta = this.numero1 - this.numero2;
      this.multiplicacion = this.numero1 * this.numero2;
      this.division = this.numero1 / this.numero2;
      this.resultado = true;
      console.log(
        'Resultado de las operaciones',
        this.suma,
        this.resta,
        this.multiplicacion,
        this.division
      );
    }else {
      alert("Solo ingrese numeros");
    }
  }
}
