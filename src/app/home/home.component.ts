import { Component, OnInit } from "@angular/core"
import { projects } from "../projects/projects"
import { hobbies } from "./hobbies"
import { mainSkills, otherSkills } from "./skills"
import { TimeService } from "../shared/app-common/time.service"
import { map } from "rxjs"

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

   yoeRounded$

   constructor(public timeSvc: TimeService) {
      this.yoeRounded$ = timeSvc.yoe$.pipe(
         map((yoe) => {
            return Math.floor(Number(yoe))
         })
      )
   }

   ngOnInit(): void {}
}
