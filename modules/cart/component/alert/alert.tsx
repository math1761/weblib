import { FC } from "react";
import style from './alert.module.scss';

export const Alert: FC = () => (
    <div className={style.alertContainer}>
        <p>Tous les articles ont été retirés du panier</p>
    </div>
)