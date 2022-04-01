import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <ul className='movies-card-list'>
            {props.moviesArray.map((movie) => (
                <MoviesCard isLiked={movie.isLiked} movie={movie} isSaved={props.isSaved} />
            ))}
        </ul>
    );
}

export default MoviesCardList;
