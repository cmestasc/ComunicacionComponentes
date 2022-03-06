import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridModule } from '@progress/kendo-angular-grid';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { AgregarComponent } from './agregar/agregar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { GridComponent } from './grid/grid.component';
import { VistaComponent } from './vista/vista.component';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    AgregarComponent,
    BuscadorComponent,
    GridComponent,
    VistaComponent
  ],
  exports: [
    VistaComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class EjercicioModule { }
