import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Persona } from '../interfaces/Persona.interface';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  private _nacionalidad: string[] = [
    'Española',
    'Inglesa',
    'Portuguesa',
    'Brasileña',
  ];

  get nacionalidad(){
    return this._nacionalidad;
  }

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

  @Output() envioNuevaPersona : EventEmitter <Persona> = new EventEmitter();

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
    if( !this.nacionalidad.includes(this.personaForm.value.formNacionalidad) ){
      mensaje +="-Selecciona una nacionalidad.";
      validado = false;
    }
    if(!validado){
      window.alert(mensaje);
    }else{
      this.nuevaPersona.Nombre = this.capitalizeFirstLetter(this.personaForm.value.formNombre);
      this.nuevaPersona.Apellidos = this.capitalizeFirstLetter(this.personaForm.value.formApellidos);
      this.nuevaPersona.Edad = this.personaForm.value.formEdad;
      this.nuevaPersona.Nacionalidad = this.personaForm.value.formNacionalidad;

      this.envioNuevaPersona.emit(this.nuevaPersona);

      this.nuevaPersona.Nombre = '';
      this.nuevaPersona.Apellidos = '';
      this.nuevaPersona.Edad = 0;
      this.nuevaPersona.Nacionalidad = '';

      document.getElementById("buttonReset")?.click();

    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
