import { Component, Input } from '@angular/core';
import { Flash } from 'src/app/interfaces/flash'


@Component({
   selector: 'app-msgs',
   template: `
      <div *ngIf="msg.text" [class]="msg.type">{{ msg.text }}</div>
      <div *ngIf="msg.type === 'processing'" [class]="msg.type">
         Sending...
      </div>
   `,
   styleUrls: ['./msgs.scss']
})
export class MsgsComponent {
  @Input() msg: Flash
}
