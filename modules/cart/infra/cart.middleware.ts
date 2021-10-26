import { Action, Dispatch, Store } from "redux";
import { closeAlert, sendAlert } from "../redux/cart.actions";
import { Actions } from "./cart.constants";

export const cartMiddleWare = (store: Store) => (next: Dispatch) => (action: Action) => {
    next(action);
    if (action.type === Actions.DELETE_ALL_ARTICLES) {
        store.dispatch(sendAlert());
        setTimeout(() => {
            store.dispatch(closeAlert());
        }, 2000);
    }
};
