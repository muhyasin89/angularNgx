import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{
  post: Post;
  postForm: FormGroup;
  postSubscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>){

  }

  onEditPost(){

  }

  ngOnInit(): void{
    this.route.paramMap.subscribe((params) => {
      // console.log(params)
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostById, {id}).subscribe(data => {
        this.post = data;
        // console.log(this.post);
        this.createForm();
      });
    });
  }

  createForm(){
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.minLength(10)])
    });
  }

  ngOnDestroy(){
    if(this.postSubscription){
      this.postSubscription.unsubscribe();
    }
  }
}
