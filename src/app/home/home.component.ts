import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import { interval, observable } from 'rxjs';
import { first, scan } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { throttleTime } from 'rxjs/operators';
import { of } from 'rxjs';
import { Subject, from } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

seconde:number;

  constructor(private userService:UserService) { }
  users = []
  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(
      result => {
        this.users = result;
      },
      error => {
        console.log(error);
      }

    )

  interval(1000).subscribe(
  (value: number) => {
    this.seconde = value;
  },
  (error: any) => {
    console.log('error');
  },
  () => {
    console.log('observable completed !');
  }
);
// RxJs

// ********* observable && observer *********



//fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

//let count = 0;
//document.addEventListener('click', () => console.log(`Clicked ${++count} times`));

//fromEvent(document, 'click')
 // .pipe(scan(count => count + 1, 0))
 // .subscribe(count => console.log(`Clicked ${count} times`));


 // RxJS v6+


 //fromEvent(document, 'click')
// .pipe(
  // throttleTime(1000),
 //  scan(count => count + 1, 0)
 //)
 //.subscribe(count => console.log(`Clicked ${count} times`));
    
  //}

  /*
  const foo = new Observable(subscriber => {
    console.log('Hello');
    subscriber.next(42);
  });
   
  foo.subscribe(x => {
    console.log(x);
  });
  foo.subscribe(y => {
    console.log(y);
  }); 
*/

/*
const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100); // "return" another value
  subscriber.next(200); // "return" yet another
});
 
console.log('before');
foo.subscribe(x => {
  console.log(x);
});
console.log('after');

*/

/*
const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 3000);
});
 
console.log('before');
foo.subscribe(x => {
  console.log(x);
});
console.log('after');
*/

/*
const observable = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi')
  }, 1000);
});
observable.subscribe(x => console.log(x));
*/

/*
const observable = new Observable(function subscribe(subscriber) {
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
  } catch (err) {
    subscriber.error(err); // delivers an error if it caught one
  }
});

const subscription = observable.subscribe(x => console.log(x));

// Later:
subscription.unsubscribe();

*/
//********** operators ************//
/*
of(25,30,50)
  .pipe(map((x) => x * x))
  .subscribe((v) => console.log(`value: ${v}`));
*/

/********Operators */
/*
of(2,1,0)
  .pipe(map((x) => x *x ))
  .subscribe((v) => console.log(`value: ${v}`));

// Logs:
// value: 4
// value: 1
// value: 0
*/

/*
of(90,5,8)
.pipe(first())
.subscribe(
  (val) => console.log(`value : ${val}`));
*/

/*
const observable = interval(1000 /* number of milliseconds );*/

/********Subscription */


/*

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();

*/

/*
const observable1 = interval(200);
 
const subscription = observable1.subscribe(x => console.log('first: ' + x));
 
subscription.add(subscription);
 
setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 1000);
*/

/********Subject */

/*
const subject = new Subject<number>();
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
 
subject.next(1);
subject.next(2);
 */

/*
const subject = new Subject<number>();
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
 
const observable = from([4,5,7]);
 
observable.subscribe(subject); // You can subscribe providing a Subject
*/

/*
const subject = new ReplaySubject(3); // buffer 3 values for new subscribers
 
subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
 
subject.next(1);
subject.next(2);
subject.next(3);
//subject.next(4);
 
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});
 
subject.next(5);
*/


const sumObserver = {
  sum: 0,
  next(value) {
    console.log('Adding: ' + value);
    this.sum = this.sum + value;
  },
  error() {
    // We actually could just remove this method,
    // since we do not really care about errors right now.
  },
  complete() {
    console.log('Sum equals: ' + this.sum);
  }
};
 
of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
  .subscribe(sumObserver);
 
// Logs:
// "Adding: 1"
// "Adding: 2"
// "Adding: 3"
// "Sum equals: 6"

  }

}
