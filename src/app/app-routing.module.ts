import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './home/mission/mission.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: LoginComponent}, 
  { path:'home', component:HomeComponent,
    children:[
      {path: '',redirectTo: 'dashboard',pathMatch: 'full'},
      { path:'missions', component:MissionComponent},
      { path:'dashboard', component:DashboardComponent}
    ] },
  {path: '**', component: LoginComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
