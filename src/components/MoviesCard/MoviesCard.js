import React from 'react';
import { useLocation } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const baseUrl = 'https://api.nomoreparties.co';

function MoviesCard({ movie, handleSaveMovie, handleDeleteMovie }) {
    // const currentUser = React.useContext(CurrentUserContext);
    const location = useLocation().pathname;

    const durationHours =
        movie.duration >= 60
            ? `${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`
            : `${movie.duration % 60}м`;

    const moviesCardLikeButtonClassName = `${
        location === '/saved-movies'
            ? 'movies-card__delete-button'
            : `movies-card__like ${movie.saved ? 'movies-card__like_active' : ''}`
    }`;

    const moviesCardImagePath = `${
        location === '/movies' ? baseUrl + movie.image.url : movie.image
    }`;

    function handleClick() {
        location === '/movies'
            ? movie.saved === true
                ? handleDeleteMovie(movie)
                : handleSaveMovie(movie)
            : handleDeleteMovie(movie);
    }

    return (
        <li className='movies-card'>
            <a className='' href={movie.trailerLink} target='_blank' rel='noreferrer'>
                <img
                    className='movies-card__image'
                    src={moviesCardImagePath}
                    alt='Карточка фильма'
                ></img>
            </a>
            <div className='movies-card__info'>
                <p className='movies-card__name'>{movie.nameRU}</p>
                <button
                    type='button'
                    className={moviesCardLikeButtonClassName}
                    onClick={handleClick}
                ></button>
            </div>
            <p className='movies-card__duration'>{durationHours}</p>
        </li>
    );
}

export default MoviesCard;
