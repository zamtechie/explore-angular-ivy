import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular  ' + VERSION.major;

  constructor() {}
}

var observableObj: Observable<any>;
var filterObservableObj: Observable<any>;
function asycStream(obv: any) {
  console.log('a');
  /*setInterval(() => {
    obv.next(Math.random() * 10);
  }, 5000);*/
}

observableObj = new Observable(asycStream);
filterObservableObj = observableObj.pipe(filter((x) => x > 4));

filterObservableObj.subscribe((res) => {
  observerFn(res);
});

function observerFn(data) {
  console.log(data);
}
