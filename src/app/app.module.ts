import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';
import { ServicestudentService } from './servicestudent.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ServicestudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
