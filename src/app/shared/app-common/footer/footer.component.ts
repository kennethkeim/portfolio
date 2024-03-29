import { ChangeDetectionStrategy, Component } from "@angular/core"
import { TimeService } from "../time.service"

interface Link {
   url: string
   text: string
}

@Component({
   selector: "app-footer",
   templateUrl: "./footer.component.html",
   styleUrls: ["./footer.component.scss"],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
   public links: Link[] = [
      {
         text: "LinkedIn",
         url: "https://www.linkedin.com/in/kennethkeim"
      },
      {
         text: "GitHub",
         url: "https://github.com/kennethkeim"
      },
      {
         text: "Contact Me",
         url: "mailto:kkeim77@gmail.com"
      }
   ]

   public thisYear = new Date().getFullYear()

   constructor(public timeSvc: TimeService) {}
}
