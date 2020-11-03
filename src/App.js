import React, { useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '4cae5b2df550a0f0032281daed8ec9dd2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if(command === "testCommand") {
          alert("code was executed");
        }
      }
    }) 
  }, [])

  return (
    <div>
      <h2>News By Alan</h2>
    </div>
  );
}

export default App;
