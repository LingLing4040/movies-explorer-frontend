import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
    moviesArray,
    windowWidth,
    handleSaveMovie,
    handleDeleteMovie,
    moviesMessage,
}) {
    const [renderedMoviesArray, setRenderedMoviesArray] = React.useState([]);
    const [isMoreButtonActive, setIsMoreButtonActive] = React.useState(false);
    const [numberOfCards, setNumberOfCards] = React.useState(12);
    const [numberOfAddedCards, setNumberOfAddedCards] = React.useState(0);

    const location = useLocation().pathname;

    function countCards() {
        if (windowWidth >= 1200) {
            setNumberOfCards(12);
            setNumberOfAddedCards(3);
        } else if (windowWidth < 1200 && windowWidth >= 768) {
            setNumberOfCards(8);
            setNumberOfAddedCards(2);
        } else {
            setNumberOfCards(5);
            setNumberOfAddedCards(2);
        }
    }

    function handleMoreClick() {
        setRenderedMoviesArray(
            moviesArray.slice(0, renderedMoviesArray.length + numberOfAddedCards)
        );
        if (renderedMoviesArray.length >= moviesArray.length - numberOfAddedCards) {
            setIsMoreButtonActive(false);
        }
    }

    React.useEffect(() => {
        countCards();
    }, [windowWidth]);

    React.useEffect(() => {
        if (location === '/movies') {
            setRenderedMoviesArray(moviesArray.slice(0, numberOfCards));
            if (moviesArray.length <= numberOfCards) {
                setIsMoreButtonActive(false);
            } else {
                setIsMoreButtonActive(true);
            }
        } else {
            setRenderedMoviesArray(moviesArray);
            setIsMoreButtonActive(false);
        }
    }, [moviesArray]);

    return (
        <section className='movies-card-list__container'>
            {moviesArray.length === 0 ? (
                <p className='movies-card-list__not-found'>{moviesMessage}</p>
            ) : (
                <ul className='movies-card-list'>
                    {renderedMoviesArray.map((movie) => (
                        <MoviesCard
                            key={location === '/movies' ? movie.id : movie._id}
                            movie={movie}
                            handleSaveMovie={handleSaveMovie}
                            handleDeleteMovie={handleDeleteMovie}
                        />
                    ))}
                </ul>
            )}
            {isMoreButtonActive && (
                <button type='button' className='movies__more' onClick={handleMoreClick}>
                    Ещё
                </button>
            )}
        </section>
    );
}

export default MoviesCardList;
