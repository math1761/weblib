import { Actions } from "../infra/cart.constants";
import { Articles } from "../cart.type";

export const fetchPending = () => ({
    type: Actions.FETCH_PENDING
});

export const fetchSuccess = (articles: Articles[]) => ({
    type: Actions.FETCH_SUCCESS,
    articles
});

export const fetchError = (error: string) => ({
    type: Actions.FETCH_ERROR,
    error
});

export const removeArticle = (id: number) => ({
    type: Actions.DELETE_ARTICLE,
    id
});

export const removeAllArticles = () => ({
    type: Actions.DELETE_ALL_ARTICLES
});

export const addArticle = (id: number) => ({
    type: Actions.ADD_ARTICLE,
    id
});

export const sendAlert = () => ({
    type: Actions.SEND_ALERT
});

export const closeAlert = () => ({
    type: Actions.CLOSE_ALERT
});