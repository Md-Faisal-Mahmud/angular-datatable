import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './my/my.component';
import { DatatableComponent } from './shared/datatable/datatable.component';

const routes: Routes = 
[
  {path: 'my-component', component: MyComponent},
  // {path: 'datatable', component: DatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
