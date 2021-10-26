import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '../cart/component/alert/alert';
import { removeAllArticles } from '../cart/redux/cart.actions';
import { ArticlesState, REDUCER_KEY } from '../cart/redux/cart.reducer';
import style from './footer.module.scss';

export const Footer = () => {
    const dispatch = useDispatch();
    const hasAlert = useSelector((state: ArticlesState) => state[REDUCER_KEY].hasAlert);
    return (
        <>
            {hasAlert && <Alert />}
            <footer className={style.footer} onClick={() => dispatch(removeAllArticles())}>
                <p>Vider le panier</p>
            </footer>
        </>
    )
}