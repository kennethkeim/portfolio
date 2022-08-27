import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { HomeRoutingModule } from "./home-routing.module"
import { HomeComponent } from "./home.component"
import { AppCommonModule } from "../shared/app-common/app-common.module"

@NgModule({
   declarations: [HomeComponent],
   imports: [CommonModule, HomeRoutingModule, AppCommonModule]
})
export class HomeModule {}
