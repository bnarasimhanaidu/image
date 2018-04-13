import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
hi="<h2 class='my'>welcomes</h2><br><h4>Naidu</h4>"
  url = '';
  public uploader:FileUploader = new FileUploader({});
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        console.log(event.target.result);
        this.url = event.target.result;
      }
    }
  }
}