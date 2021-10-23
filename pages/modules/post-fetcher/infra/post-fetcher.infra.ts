import * as R from 'ramda';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import {Posts} from '../post-fetcher.type';
import { fetchPending, fetchSuccess } from '../redux/post-fetcher.actions';
import { PostsState, REDUCER_KEY } from '../redux/post-fetcher.reducer';
import { url } from './post-fetcher.constants';

export const removePost = (id: number, posts: Posts[]) => R.filter(
    R.compose(
     R.not,
     R.propEq('id', id)
    ),
    posts
);

export const useFetch = (page) => {
    const dispatch = useDispatch();
    const isPending = useSelector((state: PostsState) => state[REDUCER_KEY].isPending);
    const error = useSelector((state: PostsState) => state[REDUCER_KEY].error);
    const posts = useSelector((state: PostsState) => state[REDUCER_KEY].posts);
    const hasMore = useSelector((state: PostsState) => state[REDUCER_KEY].hasSpinner);
    
    const sendQuery = useCallback(async () => {
        dispatch(fetchPending());
        fetch(url(page.toString())).then((res) => res.json())
        .then((posts: Posts[]) => {
            dispatch(fetchSuccess(posts))
        });
    }, [page]);
  
    useEffect(() => {
      sendQuery();
    }, [sendQuery, page]);
  
    return { isPending, error, posts, hasMore };
  }