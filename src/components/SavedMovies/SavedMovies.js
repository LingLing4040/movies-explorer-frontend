import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({
    movies,
    handleSearch,
    handleSaveMovie,
    handleDeleteMovie,
    windowWidth,
    moviesMessage,
    updateIsShortSaved,
    isShortSaved,
    keywordSaved,
    updateKeywordSaved,
    isLoading,
    handleSearchSaved,
}) {
    return (
        <main className='movies page__container'>
            <SearchForm
                handleSearch={handleSearch}
                handleSearchSaved={handleSearchSaved}
                updateIsShortSaved={updateIsShortSaved}
                isShortSaved={isShortSaved}
                keywordSaved={keywordSaved}
                updateKeywordSaved={updateKeywordSaved}
            />
            {isLoading ? (
                <Preloader />
            ) : movies.length > 0 ? (
                <MoviesCardList
                    moviesArray={movies}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    windowWidth={windowWidth}
                    moviesMessage={moviesMessage}
                />
            ) : (
                <p className='movies__not-found'>Ничего не найдено</p>
            )}
        </main>
    );
}

export default SavedMovies;
