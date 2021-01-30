import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import React, { useState } from 'react';

function App() {
  const [news, setNews] = useState([]);

  return (
    <div className="container py-4">
      <Navbar callback={(news)=>setNews(news)}/>
      <Content news={news}/>
    </div>
  );
}

export default App;
