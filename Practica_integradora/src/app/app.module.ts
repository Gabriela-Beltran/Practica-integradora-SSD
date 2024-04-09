import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './plantillas/footer/footer/footer.component';
import { HeaderComponent } from './plantillas/header/header/header.component';
import { InicioComponent } from './vistas/inicio/inicio.component';
import { SimplexComponent } from './vistas/simplex/simplex.component';
import { ScoringComponent } from './vistas/scoring/scoring.component';
import { MineriaComponent } from './vistas/mineria/mineria.component';
import { ImagenComponent } from './vistas/imagen/imagen.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    SimplexComponent,
    ScoringComponent,
    MineriaComponent,
    ImagenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
