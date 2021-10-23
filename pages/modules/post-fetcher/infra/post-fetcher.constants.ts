export const url = (page = '0') => `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`;

export enum Actions {
    FETCH_PENDING = 'FETCH_PENDING',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_ERROR = 'FETCH_ERROR',
    DELETE_POST = 'DELETE_POST'
};
