import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Persona } from '../interfaces/Persona.interface';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  // @Output() dataVista: Persona[]= this.dataService.Data;
  // personas: Persona[]=this.dataVista;
  personaRecibidaVista: Persona = {
    Nombre: "mal",
    Apellidos: '',
    Edad: 0,
    Nacionalidad: ""
};

recibirPersona($event:Persona){
  this.personaRecibidaVista=$event;
  console.log($event);
  console.log($event.Nombre);
  console.log(this.personaRecibidaVista);


}


  @Input() filtroVista: string ='';


  constructor() { }

  ngOnInit(): void {
  }

}
