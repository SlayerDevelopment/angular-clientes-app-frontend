import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private endPoint = 'http://localhost:7500/api/v1/clientes';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get(this.endPoint).pipe(
      map(r => r as Cliente[])
    );
  }

  registrar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.endPoint, cliente, { headers: this.httpHeaders });
  }

  getCliente(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.endPoint}/${id}`);
  }

  actulizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.endPoint}/${cliente.id}`, cliente, { headers: this.httpHeaders });
  }


  eliminar(id: number): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(`${this.endPoint}/${id}`, { headers: this.httpHeaders });
  }
}
