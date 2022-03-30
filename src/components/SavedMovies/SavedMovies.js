import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies({
    movies,
    handleSearch,
    handleSaveMovie,
    handleDeleteMovie,
    windowWidth,
    moviesMessage,
    updateIsShort,
    isShort,
    keyword,
    updateKeyword,
}) {
    const currentUser = React.useContext(CurrentUserContext);
    // React.useEffect(() => {
    //     handleSearch();
    //     console.log(movies);
    // }, []);
    // function getFirstSavedMovies() {
    //     mainApi
    //         .getSavedMovies()
    //         .then((movies) => {
    //             movies.filter((movie) => currentUser._id === movie.owner);
    //         })
    //         .then(() => {
    //             const firstSavedMovies = movies;
    //             return firstSavedMovies;
    //         })

    //         .catch(() => {
    //             // setInitialSavedMovies([]);
    //         });
    // }

    return (
        <main className='movies page__container'>
            <SearchForm
                handleSearch={handleSearch}
                updateIsShort={updateIsShort}
                isShort={isShort}
                keyword={keyword}
                updateKeyword={updateKeyword}
            />
            <Preloader />
            <MoviesCardList
                moviesArray={movies}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                windowWidth={windowWidth}
                moviesMessage={moviesMessage}
            />
        </main>
    );
}

export default SavedMovies;
