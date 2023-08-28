import React, { useState, useEffect } from 'react';
import './App.css';
import NewsCard from './NewsCard';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>News API Website</h1>
      </header>
      <main className="news-container">
        {articles.map(article => (
          <NewsCard key={article.title} article={article} />
        ))}
      </main>
    </div>
  );
};

export default App;
