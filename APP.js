import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual NewsAPI key
        const apiKey = 'YOUR_API_KEY';
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []); // Empty dependency array ensures that useEffect runs only once (on mount)

  return (
    <div className="App">
      <h1 className="text-center mt-4 mb-4">Latest News</h1>
      <div className="container">
        <div className="row">
          {news.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
