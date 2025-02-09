import {React, useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';

const App = () => {
  const [pokemon, setPokemon]= useState([]);
  const [loading, setLoading]= useState(true);
  const [currentPageUrl, setCurrentPageUrl]= useState('https://pokeapi.co/api/v2/pokemon');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(()=>{
    let cancel;
    setLoading(true);
    axios
    .get(currentPageUrl, {
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
    .then((response)=>{
      setPokemon(response.data.results);
      setLoading(false);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false);
    });
    return()=>{
      cancel();

    };

  
  },[currentPageUrl]);
  if(loading){
    return "loading..."

  }
  function goTonextPage (){
    return setCurrentPageUrl(nextPageUrl);
  }
  function goToPreviousPage (){
    return setCurrentPageUrl(prevPageUrl);
  }
  

  return (
    <>
    <PokemonList pokemon= {pokemon}/>
    <Pagination next = {nextPageUrl ? goTonextPage : null } previous = {prevPageUrl ? goToPreviousPage : null}/>
    </>
  )
}

export default App