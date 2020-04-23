import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from "react-router-dom"
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"

const App = () => {
  const [savedList, setSavedList] = useState([]);
  
  const addToSavedList = (movie) => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
        
        <SavedList list={savedList} />
        <Route path ="/movies/:movieID" >
        <Movie movies={addToSavedList}/>
        </Route>
      <Route path="/">
        <MovieList />
        </Route>
        
        
        
      

    </div>
  );
  }


export default App;
