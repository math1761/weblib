import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Articles } from "../cart.type";
import { addArticle, removeArticle } from "../redux/cart.actions";
import style from '../cart.module.scss';
import { useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';

export const Article: FC<{
    article: Articles
}> = ({ article }) => {
    const dispatch = useDispatch();
    const [{ x }, api] = useSpring(() => ({ x: 0, y: 0 }));
    const bind = useDrag(({ down, offset: [ox, oy] }) => api.start({ x: ox, y: oy, immediate: down }), {
        bounds: { left: -100, right: 100, top: -50, bottom: 50 },
        rubberband: true,
        axis: 'lock'
    });

    return (
        <li className={style.cardContainer} {...bind()}>
            <div className={style.trashContainer}><button onClick={() => dispatch(removeArticle(article.id))}>Supprimer</button></div>
            <animated.div className={style.articleContainer} style={{ x }}>
                <div className={style.card}>
                    <p>{article.name}</p>
                    <p>{article.description}</p>
                    <p>Quantité : {article.quantity}</p>
                    <button onClick={() => dispatch(addArticle(article.id))}>Add 1</button>
                </div>
            </animated.div>
        </li>
    )
};
