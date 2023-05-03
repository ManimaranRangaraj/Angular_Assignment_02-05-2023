import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomeComponent },
  { path: 'Students', component: StudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
