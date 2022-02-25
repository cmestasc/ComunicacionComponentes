import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';

import { Persona } from '../interfaces/Persona.interface';

@Component({
  // changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  private _personasArray: Persona[] = [
    {
      Nombre: 'Juan',
      Apellidos: 'García',
      Edad: 28,
      Nacionalidad: 'Española',
    },
    {
      Nombre: 'María',
      Apellidos: 'Gomez',
      Edad: 30,
      Nacionalidad: 'Española',
    },
  ];
  get personasArray(){
    return this._personasArray;
  }

  @Input() dataGrid: Persona[] = [];
  @Input() filtroGrid: string = '';
  @Input() personaRecibidaGrid: Persona = {
    Nombre: '',
    Apellidos: '',
    Edad: 0,
    Nacionalidad: '',
  };

  // filtrar() {
  //   return this.dataService.datosFiltrados(this.filtroGrid);
  // }

  eliminar(persona:Persona){
    this._personasArray.splice(this._personasArray.indexOf(persona),1);
    window.alert(persona);

  }

  constructor() {}

  // getData() {
  //   return this.dataService.Data;
  // }

  ngOnInit(): void {}
}
