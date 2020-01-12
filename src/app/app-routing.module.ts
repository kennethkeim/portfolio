import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProjectsComponent } from './pages/projects/projects';
import { ContactComponent } from './pages/contact/contact';


const routes: Routes = [
   {
      path: '',
      component: HomeComponent
   },
   {
      path: 'about',
      component: AboutComponent
   },
   {
      path: 'projects',
      component: ProjectsComponent
   },
   {
      path: 'contact',
      component: ContactComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
