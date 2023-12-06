import { useState, useEffect } from "react";
import './App.css';
import searchIcon from './search.svg'
import { SingleMovieTemplate } from "./SingleMovieTemplate";
//7647c8ff

const API_URL = 'http://www.omdbapi.com?apikey=7647c8ff'



function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);  //изчаквам да извлича заявка към  //пример https://www.omdbapi.com/?apikey=7647c8ff&s=Superman
    const data = await response.json();
    setMovies(data.Search)                           //и запазваме в нашия useState всички филми които отговарям на даденото име
  }

  useEffect(() => {
    searchMovie('Super Mario')
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="search" onClick={() => searchMovie(searchTerm)} />
      </div>

      {movies?.length > 0
        ? <div className="container">
          {movies.map((movie,i) => <SingleMovieTemplate key={i} movie={movie} />)}
        </div>
        : <div className="empty">
          <h2>No Movies found</h2>
        </div>
      }


    </div>
  );
}

export default App;
