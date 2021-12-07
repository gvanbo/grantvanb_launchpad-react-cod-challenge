import { crud_add, load_posts, loadPostsSuccess } from "./actions";

export const loadPosts = () => async (dispatch, getState) => {
    dispatch(load_posts());
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts? _start=0&_limit=20`);
    const loadedPosts = await response.json();
    dispatch(loadPostsSuccess(loadPosts))
}