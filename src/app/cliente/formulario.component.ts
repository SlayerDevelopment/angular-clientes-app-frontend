import { Observable } from 'rxjs';
import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit {

  private cliente: Cliente = new Cliente();
  titulo = 'Registrar Cliente';
  boton = 'Registrar';

  constructor(private service: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarCliente();
  }

  guardar(): void {
    this.service.registrar(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/cliente']);
        swal.fire('Nuevo Cliente', `Cliente ${cliente.nombres} creado con exito`, 'success');
      }
    );
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      const id: number = params.id;
      if (id) {
        this.service.getCliente(id).subscribe((cliente) => this.cliente = cliente);
        this.titulo = 'Modificar Cliente';
        this.boton = 'Modificar';
      }
    });
  }

  actualizar(): void {
    this.service.actulizar(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/cliente']);
        swal.fire('Cliente Actualizado', `Cliente:  ${cliente.nombres} actualizado con exito`, 'success');
      }
    );
  }

}
