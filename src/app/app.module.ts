import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app/app.component"
import { NotFoundComponent } from "./not-found/not-found.component"
import { AppCommonModule } from "./shared/app-common/app-common.module"

@NgModule({
   declarations: [AppComponent, NotFoundComponent],
   imports: [BrowserModule, AppRoutingModule, AppCommonModule, CommonModule],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {}
