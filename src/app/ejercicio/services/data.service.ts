import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/Persona.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private nacionalidadData: string[]=["Española", "Inglesa", "Portuguesa", "Brasileña"];

   private _personas: Persona[] = [
    {
        Nombre: "Juan",
        Apellidos: 'García',
        Edad: 28,
        Nacionalidad: "Española"
    },
    {
      Nombre: "María",
      Apellidos: 'Gomez',
      Edad: 30,
      Nacionalidad: "Española"
  }

];
get Data() : Persona[]{
  return this._personas;
}
get nacionalidad() : string[]{
  return this.nacionalidadData;
}

agregarPersona(persona:Persona){
  this._personas.push(persona);
}

  constructor() {

  }
}
