import { Component, OnInit } from "@angular/core"
import { projects } from "../projects/projects"
import { hobbies } from "./hobbies"
import { mainSkills, otherSkills } from "./skills"

@Component({
   selector: "app-home",
   templateUrl: "./home.component.html",
   styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
   mainSkills = mainSkills
   otherSkills = otherSkills
   hobbies = hobbies
   projects = projects.filter((p) => p.showOnHomePage)

   constructor() {}

   ngOnInit(): void {}
}
