import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    
  ]
})
export class ModuloModule { }
