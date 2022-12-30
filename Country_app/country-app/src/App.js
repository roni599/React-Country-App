import React, { useState, useEffect } from "react";

import style from '../src/Css/App.module.css'
import Country from "./Components/Country";
import Input from "./Components/Input";

function App() {

  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterCountry,setFilterCountry]=useState(country);

  const url="https://restcountries.com/v3.1/all";
  const fetchData=async(url)=>{
    setIsLoading(true);
    try{
      const response=await fetch(url);
      const data=await response.json();
      setCountry(data);
      setFilterCountry(data);
      setIsLoading(false);
      setError(null)
    }
    catch(error){
      setError(error);
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    fetchData(url);
  },[])
  const remove=(d)=>{
    const newFilter=filterCountry.filter((value)=>{
      return value.name.common!==d;
    })
    setFilterCountry(newFilter);
  }
  let search=(searchValue)=>{
    const value=searchValue.toLowerCase();
    const newCountry=country.filter((country)=>{
      const countryName=country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })
    setFilterCountry(newCountry);
  }
  const loadingMessage = <p className={style.loading_erro}>Data Fetching is Loading</p>
  const errorMessage = <p className={style.loading_erro}>{error}</p>
  return (
     <div className={style.App}>
      <h1 className={style.heading}>Country Management App</h1>
      {error && errorMessage}
      {isLoading && loadingMessage}
      <Input onSearch={search}/>
      {country && <Country country={filterCountry} onRemove={remove}/>}
    </div>
  );
}

export default App;
