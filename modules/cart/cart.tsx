import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { Articles } from "./cart.type";
import style from './cart.module.scss';
import { useFetch } from "./infra/cart.infra";
import { Article } from "./component/article";

export const Cart: FC = () => {
  const [page, setPage] = useState(1);
  const { articles, hasSpinner, timeOutId, isPending } = useFetch(page);
  const loader = useRef();
  const cartListRef = useRef();

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && !isPending && !hasSpinner) {
      return setPage(page + 1);
    }
  }, [isPending]);

  useEffect(() => {
    const option = {
      root: cartListRef.current,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
    return () => {
      observer.disconnect();
      clearTimeout(timeOutId);
    }
  }, [handleObserver]);

  return (
    <div className={style.cart}>
      <ul className={style.articlesList}>
        {articles.length > 0 && articles.map((article: Articles, key) => <Article key={key} article={article}/>)}
        <div ref={loader}>{hasSpinner && <p>Chargement de nouveaux items</p>}</div>
      </ul>
    </div>
  );
}
