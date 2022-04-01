import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMovies } from '../../constants/movies';

function SavedMovies() {
    return (
        <main className='movies page__container'>
            <SearchForm />
            <Preloader />
            <MoviesCardList moviesArray={savedMovies} isSaved={true} />
            {/* <button type='button' className='movies__more'>
                Ещё
            </button> */}
        </main>
    );
}

export default SavedMovies;
