import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./post.state";


const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(getPostsState, (state: any, props: any) => {
    console.log(props);
    return state.posts.find((post: { id: any; }) => post.id == props.id);
});