import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = '4567';
  msg = 'i<em> f u';
  flag=false;
  list = ["A","B","C","D"]
}
