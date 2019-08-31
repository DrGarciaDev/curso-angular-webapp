import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               private productoService: ProductosService) { }

  ngOnInit() {
    // Realizacion de la lectura de los parámetros
    this.route.params.subscribe( params => {
      console.log( params.termino );
      this.productoService.buscarProducto(params.termino);
    });
  }

}
