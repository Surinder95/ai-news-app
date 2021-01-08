import React, { useState, useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './Components/NewsCards/NewsCards';

const alanKey = '4cae5b2df550a0f0032281daed8ec9dd2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [newsArticles, setNewArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === "newHeadlines") {
          setNewArticles(articles);
        }
      }
    }) 
  }, [])

  return (
    <div>
      <h2>News By Alan</h2>
      <NewsCards articles = {newsArticles} />
    </div>
  );
}

export default App;
