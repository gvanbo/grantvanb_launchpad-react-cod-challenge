import { load_posts, loadPostsSuccess, loadPostsFailure } from "./actions";

export const loadPosts = () => async (dispatch, getState) => {
    try {
        dispatch(load_posts());
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?%20_start=0&_limit=20`);
        const loadedPosts = await response.json();
        dispatch(loadPostsSuccess(loadedPosts))
        console.log('try block load post', loadedPosts)
    }
    catch (error) {
        dispatch(loadPostsFailure());
        dispatch(displayAlert(error))
        console.log('try block load post')
    }
}

export const displayAlert = text => alert(text)