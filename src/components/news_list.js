import React from "react";
import NewsItem from "./news_list_item";

const NewsList = ({ news }) => {
    const berita = news.map((item, index) => (
        <NewsItem item={item} key={index} />
    ));

    return <>{berita}</>;
};

export default NewsList;
