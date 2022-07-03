import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchDataFrom } from './data/provider';
import { endpoints } from './constants/endpoints';

const App: React.FC = () => {

  const [charData, setCharData] = useState({});

  useEffect(() => {
    fetchDataFrom(endpoints.CHARS_URL)
     .then(data => setCharData(data))
    }, [])

  return (
    <div className="App">
      <p>
        {JSON.stringify(charData)}
      </p>
    </div>
  );
}

export default App;
