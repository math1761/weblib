export const url = (page = '0') => `api/articles?pageNumber=${page}&pageSize=5`;

export enum Actions {
    FETCH_PENDING = 'FETCH_PENDING',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_ERROR = 'FETCH_ERROR',
    ADD_ARTICLE = 'ADD_ARTICLE',
    DELETE_ARTICLE = 'DELETE_ARTICLE',
    DELETE_ALL_ARTICLES = 'DELETE_ALL_ARTICLES',
    SEND_ALERT = 'SEND_ALERT',
    CLOSE_ALERT = 'CLOSE_ALERT'
};
