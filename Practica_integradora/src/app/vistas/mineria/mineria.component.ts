import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-mineria',
  templateUrl: './mineria.component.html',
  styleUrls: ['./mineria.component.css']
})

export class MineriaComponent implements OnInit {
  canvas: any;
  ctx: any;
  coc: string = '';
  arreglo: any[] = [];
  constructor(private simplexApiService: ApiService) {}
  ngOnInit(): void {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
  }

  enviarDatosALaAPI(): void {
    const nombreBebida: string = `${this.coc}`;
    this.simplexApiService.bebidas(nombreBebida).subscribe(
      (respuesta: any) => {
        respuesta = JSON.parse(respuesta);
        this.arreglo = respuesta.drinks.map((bebida: any) => bebida);
        this.grafica();
      },
      (error) => {
        console.error('Error al enviar datos a la API:', error);
      }
    );
  }

  grafica(): void {
    const categoriasDeseadas = ['Cocktail', 'Ordinary Drink', 'Other / Unknown', 'Shake'];
    const conteoCategorias = categoriasDeseadas.reduce((conteo: { [categoria: string]: number }, categoria: string) => {
      const cantidad = this.arreglo.filter(bebida => bebida.strCategory === categoria).length;
      conteo[categoria] = cantidad;
      return conteo;
    }, {});
    const labels = Object.keys(conteoCategorias);
    const data = Object.values(conteoCategorias);
    const myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Cantidad de Bebidas por Categoría',
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}