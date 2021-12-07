export const LOAD_POSTS = "LOAD_POSTS";
export const load_posts = (loadedPosts) => ({
  type: LOAD_POSTS,
});

export const CRUD_ADD = "CRUD_ADD";
export const crud_add = (homePost) => ({
  type: CRUD_ADD,
  payload: { homePost },
});

export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const loadPostsSuccess = homePost => ({
    type: LOAD_POSTS_SUCCESS,
    payload: { homePost }
})

export const LOAD_POSTS_IN_PROGRESS = "LOAD_POSTS_IN_PROGRESS";
export const loadPostsInProgress = homePost => ({
    type: LOAD_POSTS_IN_PROGRESS,
    payload: { homePost }
})

