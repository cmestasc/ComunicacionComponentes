import { Component, OnInit, Output } from '@angular/core';

import { Persona } from '../interfaces/Persona.interface';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  @Output() enviarData: Persona[]= this.dataService.Data;
  personas: Persona[]=this.enviarData;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

}
