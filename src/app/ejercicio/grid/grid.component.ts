import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Persona } from '../interfaces/Persona.interface';
import { DataService } from '../services/data.service';

@Component({
  // changeDetection:ChangeDetectionStrategy.OnPush,
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() dataGrid: Persona[]=[];
  @Input() filtroGrid: string='';

  filtrar(){
    return this.dataService.datosFiltrados(this.filtroGrid);
  }

  constructor(private dataService:DataService) { }
  
  getData(){
    console.log("prueba getData");
    return this.dataService.Data;
  }

  ngOnInit(): void {
    
  }


}
