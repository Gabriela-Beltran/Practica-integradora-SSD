import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  resolverSimplex(datos: any): Observable<any> {
    let direccion = this.url + "/simplex";
    return this.http.post(direccion, { direccion, datos }).pipe(
      catchError(this.handleError)
    );
  }


  resolverScoring(datos: any): Observable<any> {
    let direccion = this.url + "/saw";
    return this.http.post(direccion, { direccion, datos }).pipe(
      catchError(this.handleError)
    );
  }


  bebidas(nombreBebida: any): Observable<any> {
    let direccion = this.url + "/mineria";
    return this.http.post(direccion, { direccion, nombreBebida }).pipe(
      catchError(this.handleError)
    );
  }


  

  categoria(categoria: any): Observable<any> {
    let direccion = this.url + "/categorias";
    return this.http.post(direccion, { direccion, categoria }).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('ERROR:', error.error.message);
    } else {
      console.error(
        `Codigo de error ${error.status}, ` +
        `en el cuerpo: ${error.error}`);
    }
    return throwError('No funciona');
  }


}
