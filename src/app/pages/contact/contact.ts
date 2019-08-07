import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../environments/environment';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  providers: [HttpClient]
})
export class ContactComponent {
   name: string;
   email: string;
   msg: string;
   success: string;
   error: string;

   constructor(private http: HttpClient) {}


   public onSubmit() {

      const body = {
         name: this.name,
         email: this.email,
         msg: this.msg
      };

      this.http.post(env.api, body)
      .subscribe((data: string) => {
         this.success = data;
      }, (err) => {
         this.error = err.error;
      });

   }

}
