import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';
import { MockDataService } from './services/mock-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,//
    ListaProductosComponent,//
    ListaComprasComponent,//
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//
    InMemoryWebApiModule.forRoot(MockDataService)//
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
