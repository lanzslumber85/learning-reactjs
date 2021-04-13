import React from "react";
import "../css/news_list_item.css";

const NewsItem = ({ item }) => {
    return (
        <>
            <div className="news_item">
                <h3>{item.title}</h3>
                <p>{item.feed}</p>
            </div>
        </>
    );
};

export default NewsItem;
