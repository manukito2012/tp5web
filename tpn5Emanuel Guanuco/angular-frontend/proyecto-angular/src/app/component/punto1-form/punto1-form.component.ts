import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto1-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './punto1-form.component.html',
  styleUrl: './punto1-form.component.css'
})
export class Punto1FormComponent {

  producto!:Producto;

  constructor(private productoService: ProductoService, private router: Router){
    
    this.producto = new Producto();
    
  }



  /**
   * Agrega un Producto a la base de datos
   */
  agregarProducto(): void {
    this.productoService.postProducto(this.producto).subscribe(
      result => {
        this.producto = new Producto();

        this.router.navigate(['punto1']);
      },

      error => {
        alert("Error: " + error);
      }
    );
  }

  /**
   * Retorna a la lista de Productos
   */
  volverLista(): void {
    this.router.navigate(['punto1']);
  }

}