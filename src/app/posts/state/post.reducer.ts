import {  createReducer, on } from "@ngrx/store";
import { addPost, deletePost, editPost } from "./post.action";
import { initialState, PostsState } from "./post.state";

const _postsReducer = createReducer(initialState, on(addPost, (state, action) => {

    let post = {...action.post};

    post.id = (state.posts.length +1).toString();
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(editPost, (state, action)=>{
        const updatePost = state.posts.map(post => { return action.post.id === post.id ? action.post : post;})
        return {
            ...state,
            posts: updatePost
        }
    }),
    on(deletePost, (state, { id }) => {
        const updatedPosts = state.posts.filter((post) => {
          return post.id !== id;
        });
    
        return {
          ...state,
          posts: updatedPosts,
        };
      })
);

export function postsReducer(state: any, action:any) {
  return _postsReducer(state, action);
}