import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the updated CSS file

const News = () => {
  const [articles, setArticles] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for the theme

  useEffect(() => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=c3b687be9d764db19e3bee7750c3a61c`;

    axios.get(apiUrl)
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.error('Error fetching news:', error));
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`news-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>Latest News</h1>
        <button onClick={toggleTheme}>Dark Mode</button>
      </header>
      <div className="card-container">
        {articles.map((article, index) => (
          <div key={index} className="card">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img src={article.urlToImage} alt={article.title} />
              <h2>{article.title}</h2>
            </a>
          </div>
        ))}
      </div>
      <footer>
        <p>© {new Date().getFullYear()} News App</p>
      </footer>
    </div>
  );
};

export default News;