import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { movies } from '../../constants/movies';

function Movies() {
    return (
        <main className='movies'>
            <SearchForm />
            <Preloader />
            <MoviesCardList moviesArray={movies} isSaved={false} />
            <button type='button' className='movies__more'>
                Ещё
            </button>
        </main>
    );
}

export default Movies;
