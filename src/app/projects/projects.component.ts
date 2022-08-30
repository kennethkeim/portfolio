import { Component, OnInit } from "@angular/core"
import { featProject, projects } from "./projects"

@Component({
   selector: "app-projects",
   templateUrl: "./projects.component.html",
   styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
   public projects = projects
   public featProject = featProject

   constructor() {}

   ngOnInit(): void {}
}
