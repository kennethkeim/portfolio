import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { NavbarComponent } from "./navbar/navbar.component"
import { FooterComponent } from "./footer/footer.component"
import { RouterModule } from "@angular/router"
import { RouterlinkComponent } from "./routerlink/routerlink.component"
import { HrefComponent } from "./href/href.component"
import { LabelComponent } from "./label/label.component"
import { PageComponent } from "./page/page.component"

@NgModule({
   declarations: [
      NavbarComponent,
      FooterComponent,
      RouterlinkComponent,
      HrefComponent,
      LabelComponent,
      PageComponent
   ],
   imports: [CommonModule, RouterModule],
   exports: [
      NavbarComponent,
      FooterComponent,
      RouterlinkComponent,
      HrefComponent,
      LabelComponent,
      PageComponent
   ]
})
export class AppCommonModule {}
