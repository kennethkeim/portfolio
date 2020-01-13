import { Component } from '@angular/core';
import { projects as allProjects } from '../../data/projects';



@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class ProjectsComponent {
   public projects = allProjects;

}
