import React, {useState, useEffect} from 'react';
import {Route, Link, Switch, useParams} from 'react-router-dom'
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
    const [savedList, setSavedList] = useState([]);
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const getMovies = () => {
            axios
                .get('http://localhost:5000/api/movies')
                .then(response => {
                    console.log(response.data);
                    setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
      <div>
          <SavedList list={savedList}/>]
          <Switch>
              <Route exact path='/' component={() => <MovieList movies={movieList}/>}/>
              <Route path={`/movies/:id`} component={Movie}/>
          </Switch>
      </div>
  );
};

export default App;
