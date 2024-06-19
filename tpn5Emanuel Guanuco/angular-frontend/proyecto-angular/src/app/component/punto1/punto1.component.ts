import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {

  productos!: Array<Producto>;

  constructor(private productoService: ProductoService, private router: Router){
    this.productos = new Array<Producto>();
  }

  cargarProductos(): void {
    this.productoService.getProductosDestacados().subscribe(
      result => {
        let producto: Producto = new Producto();

        result.forEach((element: any) => {
          Object.assign(producto, element);

          this.productos.push(producto);

          producto = new Producto();
        });
      },
      error => {
        alert("Error: " + error);
      }
    );
  }

  cargarFormularioProducto(): void {
    this.router.navigate(['punto1-form', 0]);
  }





}
