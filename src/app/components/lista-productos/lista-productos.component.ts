import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit{
  productos: Producto[] = []

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.getProductos();
  }
  
  getProductos(){
    this.productoService.getProductos()
    .subscribe(
      {
        next: productos => this.productos = productos,
        error: error => console.log(error)
      }
    )
  }  
}
