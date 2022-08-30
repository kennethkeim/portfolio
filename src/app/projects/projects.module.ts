import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ProjectsRoutingModule } from "./projects-routing.module"
import { ProjectListComponent } from "./project-list/project-list.component"
import { AppCommonModule } from "../shared/app-common/app-common.module"

@NgModule({
   declarations: [ProjectListComponent],
   imports: [CommonModule, ProjectsRoutingModule, AppCommonModule]
})
export class ProjectsModule {}
