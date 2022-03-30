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
}) {
    // const lastSearch = JSON.parse(localStorage.getItem('lastSearch'));
    // console.log(lastSearch);
    // console.log(movies);
    // React.useEffect(() => {
    //     setLastSearch(JSON.parse(localStorage.getItem('lastSearch')));
    //     console.log(lastSearch);
    //     // setRenderedMovies(lastSearch);

    //     // handleSearch(lastSearch);
    // }, []);

    const moviesArray = movies;
    // lastSearch !== null ? lastSearch :

    return (
        <main className='movies'>
            <SearchForm
                handleSearch={handleSearch}
                updateIsShort={updateIsShort}
                isShort={isShort}
                keyword={keyword}
                updateKeyword={updateKeyword}
            />
            <Preloader />
            <MoviesCardList
                moviesArray={moviesArray}
                handleSaveMovie={handleSaveMovie}
                handleDeleteMovie={handleDeleteMovie}
                windowWidth={windowWidth}
                moviesMessage={moviesMessage}
            />
        </main>
    );
}

export default Movies;
