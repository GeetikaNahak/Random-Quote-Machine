import React, { useEffect, useState } from "react";
import axios from "axios";
import './Card.css'
const Card = () => {
  const [data, setData] = useState(null);
  const [index,setIndex]=useState(0);
  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((response) => {
        setData(response.data);
        // console.log(response.data); // Moved here to log only when data is fetched
      });
  }, []);

  const onclickHandler=()=>{
    let k;
    if(data)k=Math.floor(Math.random()*data.quotes.length)
    console.log(k);
    setIndex(k)
  }

  return (
    <div className="card">
      {data && data.quotes[0] && (
        
          <div id="quote-box">
            <div id="quote-text">
              <span id="text">{data.quotes[index].quote}</span>
            </div>
            <div id="author-name">
              <span id="author">- {data.quotes[index].author}</span>
            </div>
            <div className="navlink">
            <a href="twitter.com/intent/tweet" id="tweet-quote"></a>
            <button id="new-quote" onClick={onclickHandler}>New Quote</button>
            
            </div>
          </div>
          
      )}
    </div>
  );
};

export default Card;
