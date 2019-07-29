import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { ProjectsComponent } from './projects/projects';
import { NavbarComponent } from './partials/navbar/navbar';
import { FooterComponent } from './partials/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
