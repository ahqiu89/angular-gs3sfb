import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from '../student/student.component';


const routes: Routes = [
//{path:'',component:AppComponent},
{path:'student', component:StudentComponent},
];

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



