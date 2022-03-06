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

  @Input() filtro: string = '';
  @Input() persona: Persona = {
    Nombre: '',
    Apellidos: '',
    Edad: 0,
    Nacionalidad: '',
  };

  recibirPersonaGrid(@Input() persona:Persona){
    console.log(persona);
    this._personasArray.push(persona);
    console.log(persona);
  }

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

  filtrado() :Persona[]{
    if(this.filtro === ''){
      return this.personasArray;
    }else{
      return this.personasArray.filter(word => 
        word.Nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
        word.Apellidos.toLowerCase().includes(this.filtro.toLowerCase()) ||
        word.Edad.toString().includes(this.filtro.toLowerCase()) ||
        word.Nacionalidad.toLowerCase().includes(this.filtro.toLowerCase()))
    }
}

  cargarDatos(){
    this._personasArray=[
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
  }

  eliminar(persona:Persona){
    this._personasArray.splice(this._personasArray.indexOf(persona),1);
  }

  constructor() {}

 

  ngOnInit(): void {}
}
