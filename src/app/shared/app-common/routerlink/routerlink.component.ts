import { Component, Input, OnInit } from "@angular/core"
import { BtnLabelSize, BtnLabelType } from "../styles.model"

@Component({
   selector: "app-routerlink",
   templateUrl: "./routerlink.component.html",
   styleUrls: ["../buttons-labels.scss"]
})
export class RouterlinkComponent implements OnInit {
   /** default primary */
   @Input() type: BtnLabelType = "primary"
   /** default md */
   @Input() size: BtnLabelSize = "md"
   @Input() url = ""

   constructor() {}

   ngOnInit(): void {}
}
