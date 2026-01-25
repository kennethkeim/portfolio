import { Component, OnDestroy, OnInit } from "@angular/core"
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
export class HomeComponent implements OnInit, OnDestroy {
   hobbies = hobbies
   projects = projects.filter((p) => p.showOnHomePage)

   // Formatted skill lists
   mainSkillsFormatted = ""
   otherSkillsFormatted = ""

   yoeRounded$

   // Typewriter effect
   verbs = ["design", "architect", "build", "ship"]
   currentVerbIndex = 0
   displayedVerb = ""
   isDeleting = false
   private typewriterTimeout: ReturnType<typeof setTimeout> | null = null

   // Timing constants (ms)
   private readonly TYPE_SPEED = 80
   private readonly DELETE_SPEED = 50
   private readonly PAUSE_BEFORE_DELETE = 2000
   private readonly PAUSE_BEFORE_TYPE = 500

   constructor(public timeSvc: TimeService) {
      this.yoeRounded$ = timeSvc.yoe$.pipe(
         map((yoe) => {
            return Math.floor(Number(yoe))
         })
      )
   }

   ngOnInit(): void {
      this.mainSkillsFormatted = this.formatList(mainSkills)
      this.otherSkillsFormatted = this.formatList(otherSkills)
      this.typewriterEffect()
   }

   private formatList(items: string[]): string {
      if (items.length === 0) return ""
      if (items.length === 1) return items[0]
      if (items.length === 2) return `${items[0]} and ${items[1]}`
      return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`
   }

   ngOnDestroy(): void {
      if (this.typewriterTimeout) {
         clearTimeout(this.typewriterTimeout)
      }
   }

   private typewriterEffect(): void {
      const currentVerb = this.verbs[this.currentVerbIndex]

      if (this.isDeleting) {
         // Delete one character
         this.displayedVerb = currentVerb.substring(0, this.displayedVerb.length - 1)

         if (this.displayedVerb === "") {
            // Done deleting, move to next verb
            this.isDeleting = false
            this.currentVerbIndex = (this.currentVerbIndex + 1) % this.verbs.length
            this.typewriterTimeout = setTimeout(
               () => this.typewriterEffect(),
               this.PAUSE_BEFORE_TYPE
            )
         } else {
            this.typewriterTimeout = setTimeout(
               () => this.typewriterEffect(),
               this.DELETE_SPEED
            )
         }
      } else {
         // Type one character
         this.displayedVerb = currentVerb.substring(0, this.displayedVerb.length + 1)

         if (this.displayedVerb === currentVerb) {
            // Done typing, pause then start deleting
            this.isDeleting = true
            this.typewriterTimeout = setTimeout(
               () => this.typewriterEffect(),
               this.PAUSE_BEFORE_DELETE
            )
         } else {
            this.typewriterTimeout = setTimeout(
               () => this.typewriterEffect(),
               this.TYPE_SPEED
            )
         }
      }
   }
}
