import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MissionComponent } from './mission/mission.component';

const routes: Routes = [
  { path:'home', component:HomeComponent,
    children:[
      { path:'missions', component:MissionComponent}
    ] },
  {path: '**', component: HomeComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
