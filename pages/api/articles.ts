// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import articlesJson from "./articles.json";

type Data = {
  name: string;
};

type Response = {
  pageSize: string | string[];
  pageNumber: string | string[];
  count: number;
  articles: {
    id: number;
    title: string;
    description: string;
  }[];
};

const pagination = (array, page_size, page_number) =>
  array.slice((page_number - 1) * page_size, page_number * page_size);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const pageSize = req.query.pageSize;
  const pageNumber = req.query.pageNumber;

  res.status(200).json({
    pageSize,
    pageNumber,
    count: articlesJson.articles.length,
    articles: pagination(articlesJson.articles, pageSize, pageNumber),
  });
}
