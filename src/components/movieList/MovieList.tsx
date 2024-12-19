import "./MovieList.css";
import movies from "../../data"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TMovie } from '../../data';

const MovieList: React.FC = () => {
    const [movieList, setMovieList] = useState<TMovie[]>(movies);

    const sortByDateAscending = () => {
        const sortedArr = [...movieList].sort((a, b) => Number(a.year) - Number(b.year));
        setMovieList(sortedArr);
    };

    const sortByDateDescending = () => {
        const sortedArr = [...movieList].sort((a, b) => Number(b.year) - Number(a.year));
        setMovieList(sortedArr);
    };

    const sortByAlphabetAscending = () => { 
        const sortedArr = [...movieList].sort((a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1; 
            return 0; 
        }); 
        setMovieList(sortedArr);
    };

    const sortByAlphabetDescending = () => {
        const sortedArr = [...movieList].sort((a, b) => { 
            if (a.title < b.title) return 1; 
            if (a.title > b.title) return -1; 
            return 0; 
        }); 
        setMovieList(sortedArr); 
    }; 

    const sortMoviesByGenre = () => {
        const sortedArr = [...movieList].sort((a, b) => {
            if (a.genre < b.genre) return -1; 
            if (a.genre > b.genre) return 1; 
            return 0; 
        }); 
        setMovieList(sortedArr); 
    };
// byRate fehlt, vergessen
// loader noch nicht eingebunden
    return (
        <div> 
            <div className="sort-buttons"> 
                <button onClick={sortByDateAscending}>Neuester zuerst</button> 
                <button onClick={sortByDateDescending}>Ältester zuerst</button> 
                <button onClick={sortByAlphabetAscending}>A-Z</button> 
                <button onClick={sortByAlphabetDescending}>Z-A</button> 
                <button onClick={sortMoviesByGenre}>Genre</button> 
            </div> 
            <div className="movie-list"> 
                {movieList.map((singleMovie: TMovie, index: number) => ( 
                <Link to={`/movie/${index}`} key={index}> 
                    <div className="movie-item">
                        {singleMovie.title}
                    </div> 
                </Link> 
            ))} 
        </div> 
    </div> 
    ); 
}; 

export default MovieList;