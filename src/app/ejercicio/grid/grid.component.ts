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
  @Input() mydata: Persona[]=[];

  constructor(private dataService:DataService) { }
  
  getData(){
    console.log("prueba getData");
    return this.dataService.Data;
  }

  ngOnInit(): void {
    
  }

}
