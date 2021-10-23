import Image from "next/image";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { url } from "./infra/post-fetcher.constants";
import { Posts } from "./post-fetcher.type";
import { deletePost, fetchPending, fetchSuccess } from "./redux/post-fetcher.actions";
import { REDUCER_KEY } from "./redux/post-fetcher.reducer";
import style from './post-fetcher.module.scss';
import { useFetch } from "./infra/post-fetcher.infra";

export const PostFetcher: FC = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { posts, isPending, hasMore } = useFetch(page)
  const loader = useRef();

  const deletePostOnClick = (id: number) => {
    dispatch(deletePost(id))
  }

  const handleObserver = useCallback(  // (*)
    (node) => {
      if (loader.current !== null) {
        isPending && false;

        loader.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasMore) {
            setPage((prev) => prev + 1);
          }
        });
        loader.current.disconnect();
        if (node) loader.current && loader.current.observe(node);
      }
    },
    [isPending, hasMore]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      <ul className={style.postsList}>
        {!isPending && posts.map((post: Posts) => {
          const isLastElement = posts.length === post.id + 1;
          !isLastElement ? (
              <li key={post.id}>
                <h1 onClick={() => deletePostOnClick(post.id)}>{post.title}</h1>
              </li>) : (<div ref={loader}>Loading</div>)
        })}
        <div ref={loader}></div>
      </ul>
    </div>
  );
}
