import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../interfaces/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private apiUrl = 'api/compras'

  constructor(private http: HttpClient) { }

  getCompras(): Observable<Compra[]>{
    return this.http.get<Compra[]>(this.apiUrl)
  }
}
