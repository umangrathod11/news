import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
  return (
    <div className="card">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
