import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { ListaComprasComponent } from './components/lista-compras/lista-compras.component';

const routes: Routes = [
  {path: 'api/usuarios', component: ListaUsuariosComponent},
  {path: 'api/productos', component: ListaProductosComponent},
  {path: 'api/compras', component: ListaComprasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
