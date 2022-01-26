import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular  ' + VERSION.major;

  constructor() {}
}

function asycStream(obv: any) {
  console.log('a');
  /*setInterval(() => {
    obv.next(Math.random() * 10);
  }, 5000);*/
}

// let observerObj = Observable.create(asycStream);
let observerObj = new Observable(asycStream);

observerObj.subscribe((res) => {
  console.log(res);
});
