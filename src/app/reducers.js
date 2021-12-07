import {
    LOAD_POSTS_FAILURE,
    LOAD_POSTS_IN_PROGRESS,
    LOAD_POSTS_SUCCESS
} from './actions'

export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_POSTS_IN_PROGRESS:
            return true;
        case LOAD_POSTS_SUCCESS:
        case LOAD_POSTS_FAILURE:
            return false;
        default:
            return state;
    }
}

export const homePosts = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_POSTS_SUCCESS: {
            const { homePosts } = payload;
            return homePosts;
        }
        case LOAD_POSTS_IN_PROGRESS:
        case LOAD_POSTS_FAILURE:
        default:
            return state;    
    }
}