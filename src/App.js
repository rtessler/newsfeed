import React, { useState, useEffect } from 'react';
import config from './config'

import './App.css';
import Feed from './components/Feed';
import NewsAPI from './services/NewsAPI'

function App() {

  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  console.log(`count ${count}`)

  useEffect(() => {

    if (data) {

      const interval = setInterval(() => {

          setCount(count => { 
            
            return (count >= data.articles.length-1) ? 0 : count + 1
          })

      }, config.SLIDE_INTERVAL)

      return () => clearInterval(interval)

    }

  }, [data])

  useEffect(() => {

    NewsAPI.load()
    .then(data => {

      console.log('App.got data ', data)

      setData(data)
    })
    .catch(error => {

    })

  }, [])

  return (
    <div className="App">

      <Feed />
      <p>App {count}</p>

      {
        data ?
          <div>

            <p>{data.articles[count].title}</p>

            <img src={data.articles[count].urlToImage} />

          </div>
        :
        null
      }

      <button onClick={() => setCount(count + 1)}>click</button>
     
    </div>
  );
}

export default App;
