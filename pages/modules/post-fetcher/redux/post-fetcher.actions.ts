import { Actions } from "../infra/post-fetcher.constants";
import { Posts } from "../post-fetcher.type";

export const fetchPending = () => ({
    type: Actions.FETCH_PENDING
});

export const fetchSuccess = (posts: Posts[]) => ({
    type: Actions.FETCH_SUCCESS,
    posts
});

export const fetchError = (error: string) => ({
    type: Actions.FETCH_ERROR,
    error
});

export const deletePost = (id: number) => ({
    type: Actions.DELETE_POST,
    id
});