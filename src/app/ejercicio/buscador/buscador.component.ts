import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Persona } from '../interfaces/Persona.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  buscadorInput = new FormControl('');
  
  @Output() filtroBuscador = new EventEmitter <string>();

  buscar(){
    this.filtroBuscador.emit(this.buscadorInput.value);
    // this.dataService.datosFiltrados(this.name.value);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
