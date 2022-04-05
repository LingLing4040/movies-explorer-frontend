import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React from 'react';

function Movies({
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
    handleFirstSearchSaved,
}) {
    return (
        <main className='movies'>
            <SearchForm
                handleSearch={handleSearch}
                handleSearchSaved={handleSearchSaved}
                handleFirstSearchSaved={handleFirstSearchSaved}
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

export default Movies;
