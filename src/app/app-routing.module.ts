import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';


const routes: Routes = [
   {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
   },
   {
      path: 'home',
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
