import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit{
  constructor(private store: Store<{counter: {counter:number}}>){

  }


  ngOnInit(){

  }

  onIncrement(){
    this.store.dispatch(increment());
  }

  onDecrement(){
    console.log("decrement");
    this.store.dispatch(decrement());
  }

  onReset(){
    this.store.dispatch(reset());
  }
}
