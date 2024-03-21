import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my.component';
import { DatatableModule } from '../shared/datatable/datatable.module';



@NgModule({
  declarations: [MyComponent],
  imports: [
    CommonModule,
    DatatableModule
  ]
})
export class MyModule { }
