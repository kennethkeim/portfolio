import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { NotFoundComponent } from "./not-found/not-found.component"

const routes: Routes = [
   {
      path: "",
      loadChildren: () => import("./home/home.module").then((m) => m.HomeModule)
   },
   {
      path: "projects",
      redirectTo: "work"
   },
   {
      path: "work",
      loadChildren: () =>
         import("./projects/projects.module").then((m) => m.ProjectsModule)
   },
   {
      path: "**",
      component: NotFoundComponent
   }
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {}
