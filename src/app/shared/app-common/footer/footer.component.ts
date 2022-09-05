import { Component } from "@angular/core"

interface Link {
   url: string
   text: string
}

@Component({
   selector: "app-footer",
   templateUrl: "./footer.component.html",
   styleUrls: ["./footer.component.scss"]
})
export class FooterComponent {
   public links: Link[] = [
      {
         text: "LinkedIn",
         url: "https://www.linkedin.com/in/kenneth-keim-4b055214a"
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
}
