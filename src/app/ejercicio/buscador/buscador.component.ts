import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Persona } from '../interfaces/Persona.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  name = new FormControl('');

  buscar(){
    // this.filtroBuscador.emit(this.name.value);
    // this.dataService.datosFiltrados(this.name.value);
  }

  @Output() filtroBuscador = new EventEmitter <string>();


  constructor() { }

  ngOnInit(): void {
  }

}
