import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Persona } from '../interfaces/Persona.interface';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  @Input() filtroBuscador:string = 'mal';
  @Input() filtroVista: string ='';

  @Output() envioPersona = new EventEmitter<Persona>();

  recibirFiltroVista: string='';

  personaParaGrid: Persona = {
    Nombre: "nn",
    Apellidos: '',
    Edad: 0,
    Nacionalidad: ""
};



recibirPersona($event:Persona){
  this.personaParaGrid=$event;
  console.log(this.personaParaGrid);
  this.envioPersona.emit(this.personaParaGrid);
}
filtroParaGrid: string='';

recibirFiltro($event:string){
  this.filtroParaGrid = $event;
}

  constructor() { }

  ngOnInit(): void {
  }

}
