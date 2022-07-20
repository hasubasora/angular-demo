import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app', //显示去页面配置 index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  title = '4567';
  msg = 'i<em> f u';
  flag = false;
  list = ['A', 'B', 'C', 'D'];
  myclass = 'abc';
  mystyle = { color: 'green', 'font-size': '18px', 'font-weight': '900' };
  fnShow(e) {
    alert('-------!---!---');
  }
  current = null;
  setCurrent(e, i) {
    this.current = i;
  }
}
