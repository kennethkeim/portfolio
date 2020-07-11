import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { ProjectsComponent } from './pages/projects/projects';
import { NavbarComponent } from './partials/navbar/navbar';
import { FooterComponent } from './partials/footer/footer';
import { MsgsComponent } from './partials/msgs/msgs';
import { NotFoundComponent } from './pages/not-found/not-found';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      ContactComponent,
      ProjectsComponent,
      NavbarComponent,
      FooterComponent,
      MsgsComponent,
      NotFoundComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
