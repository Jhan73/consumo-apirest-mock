import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from '../interfaces/usuario';
import { Producto } from '../interfaces/producto';
import { Compra } from '../interfaces/compra';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }
  createDb() {
    const usuarios: Usuario[] = [
      { id: 1, nombre: 'Usuario 1', email: 'usuario1@example.com' },
      { id: 2, nombre: 'Usuario 2', email: 'usuario2@example.com' },
    ];

    const productos: Producto[] = [
      { id: 1, nombre: 'Producto 1', precio: 10.99 },
      { id: 2, nombre: 'Producto 2', precio: 5.99 },
      { id: 3, nombre: 'Producto 3', precio: 19.99 },
    ];

    const compras: Compra[] = [
      { id: 1, fecha: new Date(), usuarioId: 1, productos: [productos[0], productos[2]] },
      { id: 2, fecha: new Date(), usuarioId: 2, productos: [productos[0], productos[1], productos[2]] },
      { id: 3, fecha: new Date(), usuarioId: 1, productos: [productos[1]] },
      { id: 4, fecha: new Date(), usuarioId: 2, productos: [productos[2], productos[0]] },
    ];

    return { usuarios, productos, compras };
  }
}
