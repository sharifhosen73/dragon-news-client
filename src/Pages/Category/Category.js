import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h1>Category Length: {categoryNews.length} </h1>
      {categoryNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Category;
