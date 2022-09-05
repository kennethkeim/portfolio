import { Component, Input, OnInit } from "@angular/core"
import { BtnLabelSize, BtnLabelType } from "../styles.model"

@Component({
   selector: "app-label",
   templateUrl: "./label.component.html",
   styleUrls: ["../buttons-labels.scss"]
})
export class LabelComponent implements OnInit {
   /** default primary */
   @Input() type: BtnLabelType = "primary"
   /** default md */
   @Input() size: BtnLabelSize = "md"

   constructor() {}

   ngOnInit(): void {}
}
