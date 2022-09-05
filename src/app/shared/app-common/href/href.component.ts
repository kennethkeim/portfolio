import { Component, Input, OnInit } from "@angular/core"
import { BtnLabelSize, BtnLabelType } from "../styles.model"

@Component({
   selector: "app-href",
   templateUrl: "./href.component.html",
   styleUrls: ["../buttons-labels.scss"]
})
export class HrefComponent implements OnInit {
   /** default primary */
   @Input() type: BtnLabelType = "primary"
   /** default md */
   @Input() size: BtnLabelSize = "md"
   @Input() url = ""

   constructor() {}

   ngOnInit(): void {}
}
