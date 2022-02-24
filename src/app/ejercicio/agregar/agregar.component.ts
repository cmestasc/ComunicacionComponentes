import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Persona } from '../interfaces/Persona.interface';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  nacionalidad : string[] = this.dataService.nacionalidad;

  @Output() newPersona : EventEmitter <Persona> = new EventEmitter();

  nuevaPersona : Persona = {
        Nombre:'',
        Apellidos:'',
        Edad:0,
        Nacionalidad:''
  }

  personaForm = new FormGroup({
    formNombre: new FormControl(''),
    formApellidos: new FormControl(''),
    formEdad: new FormControl(0),
    formNacionalidad: new FormControl()
    
  });

   capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  onSubmit(){
    let mensaje: string = '';
    let validado = true;
    if(this.personaForm.value.formNombre.length === 0){
      mensaje +="-Introduce un nombre válido.\n";
      validado = false;
    }
    if(this.personaForm.value.formApellidos.length === 0){
      mensaje +="-Introduce un apellido válido.\n";
      validado = false;
    }
    if(this.personaForm.value.formEdad <= 0){
      mensaje +="-Introduce una edad válida.\n";
      validado = false;
    }
    if( !this.dataService.nacionalidad.includes(this.personaForm.value.formNacionalidad) ){
      mensaje +="-Selecciona una nacionalidad.";
      validado = false;
    }
    if(!validado){
      window.alert(mensaje);
      console.log(this.personaForm.value.formNacionalidad);
    }else{
      this.nuevaPersona.Nombre = this.capitalizeFirstLetter(this.personaForm.value.formNombre);
      this.nuevaPersona.Apellidos = this.capitalizeFirstLetter(this.personaForm.value.formApellidos);
      this.nuevaPersona.Edad = this.personaForm.value.formEdad;
      this.nuevaPersona.Nacionalidad = this.personaForm.value.formNacionalidad;

      this.newPersona.emit(this.nuevaPersona);
      //Una vez creada la instancia de la nueva persona, llamo al método del servicio para agregarlo al 
      //array de personas.
      this.dataService.agregarPersona(this.nuevaPersona);
      document.getElementById("buttonReset")?.click();

    }

  }

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
