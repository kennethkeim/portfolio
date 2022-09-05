import { Component, Input, OnInit } from "@angular/core"

@Component({
   selector: "app-page",
   templateUrl: "./page.component.html",
   styleUrls: ["./page.component.scss"]
})
export class PageComponent implements OnInit {
   /** default xcenter */
   @Input() xAlign: "left" | "center" = "center"
   /** default ytop */
   @Input() yAlign: "top" | "center" = "top"

   constructor() {}

   public get xAlignClass(): string {
      return `x-${this.xAlign}`
   }

   public get yAlignClass(): string {
      return `y-${this.yAlign}`
   }

   ngOnInit(): void {}
}
