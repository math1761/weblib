import { AnyAction } from 'redux';
import { Actions } from '../infra/post-fetcher.constants';
import { removePost } from '../infra/post-fetcher.infra';
import { Posts } from '../post-fetcher.type';
import * as R from 'ramda';

const initialState = {
    isPending: false,
    hasSpinner: false,
    error: '',
    posts: []
};

export const REDUCER_KEY = 'post-fetcher';

export type PostsState = {
    [REDUCER_KEY]: {
        isPending: boolean;
        hasSpinner: boolean;
        error: string;
        posts: Posts[];
    };
};

export const postFetcherReducer = (state = initialState, actions: AnyAction) => {
    switch (actions.type) {
        case Actions.FETCH_PENDING:
            return {
                ...state,
                isPending: true
            }
        case Actions.FETCH_SUCCESS:
            return {
                ...state,
                isPending: false,
                hasSpinner: true,
                posts: state.posts.concat(actions.posts),
            }
        case Actions.FETCH_ERROR:
            return {
                ...state,
                isPending: false,
                error: ''
            }
        case Actions.DELETE_POST:
            return {
                ...state,
                posts: removePost(actions.id, state.posts)
            }
        default:
            return state
    }
}