import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-simplex',
  templateUrl: './simplex.component.html',
  styleUrls: ['./simplex.component.css']
})
export class SimplexComponent {
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
  obj1: number = 0;
  obj2: number = 0;
  obj3: number = 0;
  opt: string = '';
  resultado: number = 0;
  resultado2: number[] = [];

  enviarDatosALaAPI(): void {
    const datos: string = `${this.dato1},${this.dato2},${this.dato3},${this.dato4}\n` +
      `${this.dato5},${this.dato6},${this.dato7},${this.dato8}\n` +
      `${this.dato9},${this.dato10},${this.dato11},${this.dato12}\n` +
      `${this.obj1},${this.obj2},${this.obj3}`;

    console.log('Datos a enviar a la API:', datos);
    this.simplexApiService.resolverSimplex(datos).subscribe(
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
