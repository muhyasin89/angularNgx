import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AppState } from 'src/app/store/app.state';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selector';


@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit{
  value: number;
  channelName$: Observable<string>;

  constructor(private store: Store<AppState>){

  }

  ngOnInit(): void{
    // this.store.select(getChannelName).subscribe((channelName)=>{
    //   console.log("Channel Name Obserable called");
    //   this.channelName = channelName;
    // });
    console.log("Channel Name Obserable called");
    this.channelName$ =  this.store.select(getChannelName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

  onChangeChannelName(){
    this.store.dispatch(changeChannelName());
  }
}
