import React from 'react';

function MoviesCard(props) {
    const moviesCardLikeButtonClassName = `${
        props.isSaved
            ? 'movies-card__delete-button'
            : `movies-card__like ${props.isLiked ? 'movies-card__like_active' : ''}`
    }`;

    return (
        <li className='movies-card'>
            <img
                className='movies-card__image'
                src={props.movie.imagePath}
                alt='Карточка фильма'
            ></img>
            <div className='movies-card__info'>
                <p className='movies-card__name'>{props.movie.name}</p>
                <button
                    type='button'
                    className={moviesCardLikeButtonClassName}
                    // onClick={handleLikeClick}
                ></button>
            </div>
            <p className='movies-card__duration'>{props.movie.duration}</p>
        </li>
    );
}

export default MoviesCard;
