import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/interfaces/compra';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent implements OnInit{
  compras: Compra[] = [];

  constructor(private compraService: CompraService){}

  ngOnInit(): void {
    this.getCompras();
  }

  getCompras(){
    this.compraService.getCompras()
    .subscribe(
      {
        next: compras => this.compras = compras,
        error: error => console.log(error)
        
      }
    )
  }
}
