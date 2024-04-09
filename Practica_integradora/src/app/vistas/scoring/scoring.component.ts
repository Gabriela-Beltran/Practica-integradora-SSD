import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent {
  showSimplexForm = false;
  optimalSolution: number[] = [];


  constructor(private simplexApiService: ApiService) {
    this.showSimplexForm = true;
  }

  dato1: number = 0;
  dato2: number = 0;
  dato3: number = 0;
  dato4: number = 0;
  dato5: number = 0;
  dato6: number = 0;
  dato7: number = 0;
  dato8: number = 0;
  dato9: number = 0;
  dato10: number = 0;
  dato11: number = 0;
  dato12: number = 0;
  dato13: number = 0;
  dato14: number = 0;
  dato15: number = 0;
  dato16: number = 0;
  dato17: number = 0;
  dato18: number = 0;
  dato19: number = 0;
  dato20: number = 0;
  dato21: number = 0;
  dato22: number = 0;
  dato23: number = 0;
  dato24: number = 0;
  dato25: number = 0;
  dato26: number = 0;

  resultado: number = 0;
  resultado2: number[] = [];

  enviarDatosALaAPI(): void {
    const datos: string = `${this.dato25},${this.dato26}\n`+
                          `${this.dato1},${this.dato2},${this.dato3},${this.dato4}\n` +
                          `${this.dato5},${this.dato6},${this.dato7},${this.dato8}\n` +
                          `${this.dato9},${this.dato10},${this.dato11},${this.dato12}\n` +
                          `${this.dato13},${this.dato14},${this.dato15},${this.dato16}\n`+
                          `${this.dato17},${this.dato18},${this.dato19},${this.dato20}\n`+
                          `${this.dato21},${this.dato22},${this.dato23},${this.dato24}\n`;


  console.log('Datos a enviar a la API:', datos);

    this.simplexApiService.resolverScoring(datos).subscribe(
      (respuesta) => {
        console.log('Respuesta de la API:', respuesta);
        this.resultado = respuesta.valorOptimoZ;
        this.resultado2 = respuesta.valoresVariables;
        this.optimalSolution = respuesta[0];
        console.log(this.optimalSolution );
      },
      (error) => {
        console.error('Error al enviar datos a la API:', error);
      }
    );
  }
}
