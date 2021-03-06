import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { fetchDataFrom, normalizeJSON } from './data/provider';
import { DEFAULT_ENTRY_NAME, endpoints } from './constants/endpoints';
import MasterView from './pages/master-view/master-view';
import { Route, Routes } from 'react-router';
import DetailView from './pages/detail-view/detail-view';
import { GlobalContext, initialContextState } from './data/context';

const App: React.FC = () => {

  const [charData, setCharData] = useState(initialContextState.charData);
  const context = useMemo(
    () => ({ charData, setCharData }), 
    [charData, setCharData]
  );

  useEffect(() => {
    fetchDataFrom(endpoints.CHARS_URL)
     .then(data => setCharData(
       normalizeJSON(data[DEFAULT_ENTRY_NAME]))
       )
    }, [])

  return (
    <div className="App">
      <GlobalContext.Provider value={context}>
        <Routes>
          <Route path="/" element={<MasterView/>}/>
          <Route path="details/:id" element={<DetailView/>}/>
        </Routes>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
