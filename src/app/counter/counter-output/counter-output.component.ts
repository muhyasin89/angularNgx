import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit, OnDestroy{
  counter$: Observable<number>;
  // counter$: Observable<{ counter: number; }>;
  // counterSubscription: Subscription;

  constructor(private store: Store<{counter: CounterState}>){

  }

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe(data => {
    //   this.counter = data.counter;
    // });
      // this.counter$ = this.store.select('counter');
    // this.store.select(getCounter).subscribe((counter) => {
    //   console.log("Counter Obserable called");
    //   this.counter = counter;
    // });
    console.log("Counter Obserable called");
    this.counter$ = this.store.select(getCounter);
  }

  ngOnDestroy(): void {
      // if(this.counterSubscription){
      //   this.counterSubscription.unsubscribe;
      // }
  }
}
