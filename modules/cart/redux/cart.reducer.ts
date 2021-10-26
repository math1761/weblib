import { AnyAction } from "redux";
import { Actions } from "../infra/cart.constants";
import { removeArticle } from "../infra/cart.infra";
import { Articles } from "../cart.type";
import * as R from "ramda";

const initialState = {
  isPending: false,
  hasSpinner: false,
  error: "",
  articles: [],
  count: 1,
  hasAlert: false
};

export const REDUCER_KEY = "cart";

export type ArticlesState = {
  [REDUCER_KEY]: {
    isPending: boolean;
    hasSpinner: boolean;
    error: string;
    articles: Articles[];
    count: number;
    hasAlert: boolean;
  };
};

export const cartReducer = (state = initialState, actions: AnyAction) => {
  switch (actions.type) {
    case Actions.FETCH_PENDING:
      return {
        ...state,
        isPending: true,
        hasSpinner: true,
      };
    case Actions.FETCH_SUCCESS:
      return {
        ...state,
        isPending: false,
        hasSpinner: false,
        articles: R.flatten([...state.articles, actions.articles.articles]),
        count: actions.articles.count
      };
    case Actions.FETCH_ERROR:
      return {
        ...state,
        isPending: false,
        hasSpinner: false,
        error: actions.error,
      };
    case Actions.DELETE_ARTICLE:
      return {
        ...state,
        articles: removeArticle(actions.id, state.articles),
      };
    case Actions.DELETE_ALL_ARTICLES:
      return {
        ...state,
        articles: state.articles.map((article) => {
          return {
            ...article,
            quantity: 0,
          };
        }),
      };
    case Actions.ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (actions.id === article.id) {
            return {
              ...article,
              quantity: article.quantity + 1,
            };
          }
          return article;
        }),
      };
    case Actions.SEND_ALERT:
      return {
        ...state,
        hasAlert: true
      }
    case Actions.CLOSE_ALERT:
      return {
        ...state,
        hasAlert: false
      }
    default:
      return state;
  }
};
