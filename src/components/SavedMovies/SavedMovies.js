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
    updateIsShort,
    isShort,
    keyword,
    updateKeyword,
    isLoading,
    handleSearchSaved,
}) {
    return (
        <main className='movies page__container'>
            <SearchForm
                handleSearch={handleSearch}
                handleSearchSaved={handleSearchSaved}
                updateIsShort={updateIsShort}
                isShort={isShort}
                keyword={keyword}
                updateKeyword={updateKeyword}
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
