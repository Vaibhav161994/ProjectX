import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderHttpModule } from  'ngx-ui-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarModule } from 'ng-sidebar';
import { MissionComponent } from './mission/mission.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './home/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    NgxUiLoaderHttpModule,
    NgxUiLoaderModule.forRoot({pbDirection:'ltr',pbThickness:5,pbColor:'#e9920f',bgsColor:'#e9920f',fgsType:'rectangle-bounce-pulse-out-rapid',fgsPosition:'bottom-right'}), // import NgxUiLoaderModule
    NgxUiLoaderRouterModule.forRoot({ showForeground:true}), // import NgxUiLoaderRouterModule. By default, it will show foreground loader.
    // If you need to show background spinner, do as follow:
    // NgxUiLoaderRouterModule.forRoot({ showForeground: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
