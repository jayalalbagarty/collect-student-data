import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { ParentComponent } from './component/parent/parent.component';
import { EmployeeComponent } from './component/employee/employee.component';


const routes: Routes = [
  {
    path:'',
    component:ParentComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'dialog',
    component:DialogComponent
  },
  {
    path:'employee',
    component:EmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
