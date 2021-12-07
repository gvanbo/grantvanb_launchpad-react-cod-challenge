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