import * as R from 'ramda';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Articles} from '../cart.type';
import { fetchPending, fetchSuccess } from '../redux/cart.actions';
import { ArticlesState, REDUCER_KEY } from '../redux/cart.reducer';
import { url } from './cart.constants';

export const removeArticle = (id: number, articles: Articles[]) => R.filter(
    R.compose(
     R.not,
     R.propEq('id', id)
    ),
    articles
);

export const useFetch = (page: number) => {
    const dispatch = useDispatch();
    const isPending = useSelector((state: ArticlesState) => state[REDUCER_KEY].isPending);
    const error = useSelector((state: ArticlesState) => state[REDUCER_KEY].error);
    const articles = useSelector((state: ArticlesState) => state[REDUCER_KEY].articles);
    const hasSpinner = useSelector((state: ArticlesState) => state[REDUCER_KEY].hasSpinner);
    const count = useSelector((state: ArticlesState) => state[REDUCER_KEY].count);
    const [timeOutId, setTimeOutId] = useState(null);

    const sendQuery = useCallback(() => {
        dispatch(fetchPending());
        fetch(url(page.toString())).then((res) => res.json())
        .then((articles: Articles[]) => {
            const id = setTimeout(() => {
                dispatch(fetchSuccess(articles));
            }, 1000);
            setTimeOutId(id);
        });
    }, [page]);
  
    useEffect(() => {
        if (articles.length < count) {
            sendQuery();
        }
    }, [page]);
  
    return { isPending, error, articles, hasSpinner, timeOutId };
  }