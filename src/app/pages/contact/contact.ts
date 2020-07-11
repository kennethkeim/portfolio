import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';
import { Flash } from "src/app/interfaces/flash"


@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  providers: [HttpClient]
})
export class ContactComponent {
   name: string;
   email: string;
   msg: string;
   flash: Flash

   constructor(private http: HttpClient) {}


   public onSubmit() {

      const body = {
         name: this.name,
         email: this.email,
         message: this.msg
      };

      this.flash = { type: 'processing', text: null }

      this.http.post(env.api, body)
      .subscribe((data: any) => {
         this.flash = { type: 'success', text: data.message}
      }, (err) => {
         this.flash = { type: 'error', text: err.error.message }
      });

   }

}
