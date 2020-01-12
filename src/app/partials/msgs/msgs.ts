import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-msgs',
  template: '<div [class]="msg.type">{{ msg.text }}</div>',
  styleUrls: ['./msgs.scss']
})
export class MsgsComponent {
  @Input() msg: any;
}
