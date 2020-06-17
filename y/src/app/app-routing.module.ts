import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HomeComponent } from './home/home.component';
import { StudentDataComponent } from './student-data/student-data.component';

const routes: Routes = [
{
 path:'', component: RegistrationComponent},
{ path:'student-details', component: StudentDetailsComponent },
{ path:'home', component: HomeComponent },
{ path:'registration', component: RegistrationComponent },
{ path:'student-data', component: StudentDataComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
