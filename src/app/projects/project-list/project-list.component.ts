import { Component, OnInit } from "@angular/core"
import { featProject, projects } from "../projects"

@Component({
   selector: "app-project-list",
   templateUrl: "./project-list.component.html",
   styleUrls: ["./project-list.component.scss"]
})
export class ProjectListComponent implements OnInit {
   public projects = projects
   public featProject = featProject

   constructor() {}

   ngOnInit(): void {}
}
