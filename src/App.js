// import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'
import CountrySelect from './components/CountrySelect'
import React, { useState, useEffect } from 'react'
import SimpleCard from './components/Cards'

import { fetchData } from './Api';

function App() {

  const [globalData, setGlobalData] = useState({});


  useEffect(() => {

    const fetchApi = async () => {
      const globalData1 = await fetchData();
      setGlobalData(globalData1);
    }
    console.log('globalData :>> ', globalData)
    fetchApi();
  }, []);

  return (
    <div className="App">
      {}
      <h1>Covid-!9</h1>
      <p >Last Updated On: <span style={{ color: 'red' }}>{new Date(globalData.lastUpdate).toDateString()}</span> </p>
      <SimpleCard />
      <CountrySelect />
      <Chart />
    </div>
  );
}

export default App;
