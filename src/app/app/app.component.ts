import { Component, OnInit } from "@angular/core"
import { NavigationEnd, Router } from "@angular/router"
import { filter } from "rxjs"

@Component({
   selector: "app-root",
   template: `<router-outlet></router-outlet>`,
   styles: []
})
export class AppComponent implements OnInit {
   constructor(private router: Router) {}

   ngOnInit(): void {
      this.router.events
         .pipe(filter((event) => event instanceof NavigationEnd))
         .subscribe(() => {
            // dom content needs a few ms to render correct page height
            setTimeout(() => window.scrollTo({ left: 0, top: 0 }), 5)
         })
   }
}
