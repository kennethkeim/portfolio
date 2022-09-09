import { Injectable } from "@angular/core"
import { DateTime } from "luxon"
import { BehaviorSubject } from "rxjs"

@Injectable({
   providedIn: "root"
})
export class TimeService {
   private careerStart = DateTime.fromObject({ year: 2018, month: 7, day: 18 })
   private yoe = new BehaviorSubject(this.getYoe())
   public yoe$ = this.yoe.asObservable()

   constructor() {
      setInterval(() => this.yoe.next(this.getYoe()), 100)
   }

   private getYoe(): string {
      // get abs number of years
      const literal = this.careerStart.diffNow().as("years")
      const abs = Math.abs(literal)

      // truncate to a fixed number of decimal points
      const trunc = abs.toFixed(9)

      // pad end with zeros to keep the string from
      // "flickering" because it's length is changing
      const padded = trunc.padEnd(11, "0")

      return padded
   }
}
