import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import * as Auth from '../../utils/Auth';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
    const history = useHistory();

    const [currentUser, setCurrentUser] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    const [savedMovies, setSavedMovies] = React.useState([]);

    const [initialSavedMovies, setInitialSavedMovies] = React.useState([]);

    const [allMovies, setAllMovies] = React.useState([]);
    const [renderedMovies, setRenderedMovies] = React.useState([]);
    const [keyword, setKeyword] = React.useState('');
    const [isShort, setIsShort] = React.useState(false);

    const [isLoading, setIsLoading] = React.useState(false);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [infoMessage, setInfoMessage] = React.useState('');
    const isLogged = localStorage.getItem('isLogged') === 'true';

    React.useEffect(() => {
        checkToken();
        if (isLoggedIn) {
            Promise.all([mainApi.getInfo()])
                .then(([user]) => {
                    setCurrentUser(user);
                    localStorage.setItem('name', user.name);
                    localStorage.setItem('email', user.email);
                })
                .catch((err) => {
                    setInfoMessage(err.message);
                    setIsInfoTooltipOpen(false);
                    setIsSuccess(false);
                });
        }
    }, [isLoggedIn]);

    function setWidth() {
        setWindowWidth(window.innerWidth);
    }

    function checkToken() {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            if (token) {
                Auth.getContent().then((res) => {
                    setCurrentUser(res);
                    setIsLoggedIn(true);
                    history.push('/movies');
                    localStorage.setItem('isLogged', true);
                });
            }
        }
    }

    function handleUpdateUser({ name, email }) {
        mainApi
            .editInfo({ name, email })
            .then((res) => {
                setCurrentUser(res);
                setInfoMessage('Профиль обновлён');
                handleInfoOpen(true);
                setIsSuccess(true);
            })
            .catch((err) => {
                setInfoMessage(err.message);
                handleInfoOpen(false);
                setIsSuccess(false);
            });
    }

    function handleLogout() {
        setIsLoggedIn(false);
        localStorage.clear();
        history.push('/signin');
    }

    function handlePopupClick(event) {
        if (event.target.classList.contains('info-tooltip')) {
            closeAllPopups();
        }
    }

    function handleInfoOpen(res) {
        setIsSuccess(res);
        setIsInfoTooltipOpen(true);
    }

    function closeAllPopups() {
        setIsInfoTooltipOpen(false);
    }

    function handleSaveMovie(movie) {
        mainApi
            .saveMovie(movie)
            .then(() => {
                setIsLoading(true);
                getSavedMovies();
                const newSavedMovie = allMovies.find((item) => item.id === movie.id);
                newSavedMovie.saved = true;
                newSavedMovie.owner === currentUser._id
                    ? handleDeleteMovie(newSavedMovie)
                    : (newSavedMovie.owner = currentUser._id);

                setAllMovies(
                    allMovies.map((item) => (item.id === newSavedMovie.id ? newSavedMovie : item))
                );
                localStorage.setItem('allMovies', JSON.stringify(allMovies));
            })
            .catch((err) => {
                setInfoMessage(err.message);
                handleInfoOpen(false);
                setIsSuccess(false);
            })
            .finally(() => setIsLoading(false));
    }

    function handleDeleteMovie(movie) {
        const deletedMovie = initialSavedMovies.find((item) => item.movieId === movie.id);
        mainApi
            .deleteMovie(deletedMovie._id)
            .then(() => {
                setIsLoading(true);
                getSavedMovies();
                const deletedFilm = allMovies.find((item) => item === movie);
                delete deletedFilm.saved;

                setAllMovies(
                    allMovies.map((item) => (item.id === deletedFilm.id ? deletedFilm : item))
                );
                localStorage.setItem('allMovies', JSON.stringify(allMovies));
            })
            .catch((err) => {
                setInfoMessage(err.message);
                handleInfoOpen(false);
                setIsSuccess(false);
            })
            .finally(() => setIsLoading(false));
    }

    function handleDeleteSavedMovie(movie) {
        mainApi
            .deleteMovie(movie._id)
            .then(() => {
                setIsLoading(true);
                getSavedMovies();
                const newMovies = savedMovies.filter((item) => item !== movie);
                const deletedMovie = allMovies.find((item) => item.id === movie.movieId);
                delete deletedMovie.saved;
                setSavedMovies(newMovies);
                setAllMovies(
                    allMovies.map((item) => (item.id === deletedMovie.id ? deletedMovie : item))
                );
                localStorage.setItem('allMovies', JSON.stringify(allMovies));
            })
            .catch((err) => {
                setInfoMessage(err.message);
                handleInfoOpen(false);
                setIsSuccess(false);
            })
            .finally(() => setIsLoading(false));
    }

    function getSavedMovies() {
        mainApi
            .getSavedMovies()
            .then((movies) => {
                setIsLoading(true);
                setInitialSavedMovies(movies.filter((movie) => currentUser._id === movie.owner));
                movies
                    .filter((movie) => currentUser._id === movie.owner)
                    .forEach((movie) => {
                        const newSavedMovie = allMovies.find((item) => item.id === movie.movieId);
                        if (newSavedMovie !== undefined) {
                            newSavedMovie.saved = true;
                            setAllMovies(
                                allMovies.map((item) =>
                                    item.id === movie.movieId ? newSavedMovie : item
                                )
                            );
                        }
                    });
            })
            .catch(() => {
                setInitialSavedMovies([]);
            })
            .finally(() => setIsLoading(false));
    }

    const updateAllMovies = (movies) => {
        setAllMovies(movies);
        localStorage.setItem('allMovies', JSON.stringify(movies));
    };

    const updateSavedMovies = (movies) => {
        setSavedMovies(movies);
        localStorage.setItem('savedMovies', JSON.stringify(movies));
    };

    const updateRenderedMovies = (movies) => {
        setRenderedMovies(movies);
        localStorage.setItem('renderedMovies', JSON.stringify(movies));
    };
    const updateKeyword = (word) => {
        setKeyword(word);
        localStorage.setItem('keyword', word);
    };
    const updateIsShort = (Short) => {
        if (Short !== isShort) {
            setIsShort(Short);
        }

        localStorage.setItem('isShort', JSON.stringify(isShort));
    };

    React.useEffect(() => {
        const allMovies = JSON.parse(localStorage.getItem('allMovies') || '[]');

        updateAllMovies(allMovies);
        updateRenderedMovies(renderedMovies.length ? renderedMovies : allMovies);
        updateKeyword(localStorage.getItem('keyword') || '');
        updateIsShort(JSON.parse(localStorage.getItem('isShort') || 'false'));

        if (!allMovies.length) {
            moviesApi
                .getMovies()
                .then((movies) => {
                    setIsLoading(true);
                    updateAllMovies(movies);
                    updateRenderedMovies(movies);
                })
                .catch((err) => {
                    setInfoMessage(err.message);
                    handleInfoOpen(false);
                    setIsSuccess(false);
                })
                .finally(() => setIsLoading(false));
        }

        mainApi.getSavedMovies().then((movies) => {
            updateSavedMovies(movies);
        });
    }, []);

    function handleSearch() {
        getSavedMovies();
        let sortedMovies;

        if (keyword.length > 0) {
            sortedMovies = allMovies.filter((movie) =>
                JSON.stringify(movie.nameRU).toLowerCase().includes(keyword.toLowerCase())
            );
            isShort
                ? setRenderedMovies(sortedMovies.filter((movie) => movie.duration <= 40))
                : setRenderedMovies(sortedMovies);
        } else {
            setRenderedMovies([]);
        }
    }

    function handleSearchSaved() {
        getSavedMovies();
        let sortedMovies;

        if (keyword.length > 0) {
            sortedMovies = initialSavedMovies.filter((movie) =>
                JSON.stringify(movie.nameRU).toLowerCase().includes(keyword.toLowerCase())
            );
            isShort
                ? setSavedMovies(sortedMovies.filter((movie) => movie.duration <= 40))
                : setSavedMovies(sortedMovies);
        } else {
            setSavedMovies([]);
        }
    }

    React.useEffect(() => {
        window.addEventListener('resize', setWidth);
        return () => {
            window.removeEventListener('resize', setWidth);
        };
    });

    React.useEffect(() => {
        if (isInfoTooltipOpen === true) {
            function handleEsc(event) {
                if (event.key === 'Escape') {
                    closeAllPopups();
                }
            }

            document.addEventListener('keydown', handleEsc);

            return () => {
                document.removeEventListener('keydown', handleEsc);
            };
        }
    }, [isInfoTooltipOpen]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <div className='content'>
                    <Switch>
                        <Route exact path='/'>
                            <Header isLoggedIn={isLoggedIn} windowWidth={windowWidth} />
                            <Main />
                            <Footer />
                        </Route>
                        <ProtectedRoute
                            exact
                            path='/movies'
                            isLoggedIn={isLoggedIn}
                            isLogged={isLogged}
                        >
                            <Header isLoggedIn={isLoggedIn} windowWidth={windowWidth} />
                            <Movies
                                movies={renderedMovies}
                                handleSearch={handleSearch}
                                handleSearchSaved={handleSearchSaved}
                                windowWidth={windowWidth}
                                handleSaveMovie={handleSaveMovie}
                                handleDeleteMovie={handleDeleteMovie}
                                isShort={isShort}
                                updateIsShort={updateIsShort}
                                keyword={keyword}
                                updateKeyword={updateKeyword}
                                isLoading={isLoading}
                            />
                            <Footer />
                        </ProtectedRoute>

                        <ProtectedRoute
                            exact
                            path='/saved-movies'
                            isLoggedIn={isLoggedIn}
                            isLogged={isLogged}
                        >
                            <Header isLoggedIn={isLoggedIn} windowWidth={windowWidth} />
                            <SavedMovies
                                movies={savedMovies}
                                handleSearch={handleSearch}
                                handleSearchSaved={handleSearchSaved}
                                handleSaveMovie={handleSaveMovie}
                                handleDeleteMovie={handleDeleteSavedMovie}
                                windowWidth={windowWidth}
                                isShort={isShort}
                                updateIsShort={updateIsShort}
                                keyword={keyword}
                                updateKeyword={updateKeyword}
                                isLoading={isLoading}
                            />
                            <Footer />
                        </ProtectedRoute>

                        <ProtectedRoute
                            exact
                            path='/profile'
                            isLoggedIn={isLoggedIn}
                            isLogged={isLogged}
                        >
                            <Header isLoggedIn={isLoggedIn} windowWidth={windowWidth} />
                            <Profile handleLogout={handleLogout} onUpdateUser={handleUpdateUser} />
                        </ProtectedRoute>

                        <Route path='/signup'>
                            <Register
                                handleLogin={checkToken}
                                handleInfoOpen={handleInfoOpen}
                                setInfoMessage={setInfoMessage}
                                setIsSuccess={setIsSuccess}
                            />
                        </Route>
                        <Route path='/signin'>
                            <Login
                                handleLogin={checkToken}
                                handleInfoOpen={handleInfoOpen}
                                setInfoMessage={setInfoMessage}
                                setIsSuccess={setIsSuccess}
                            />
                        </Route>
                        <Route path='/notfoundpage'>
                            <NotFoundPage />
                        </Route>
                        <Route path='*'>
                            <Redirect to='/' />
                        </Route>
                    </Switch>
                    <InfoTooltip
                        onClose={closeAllPopups}
                        isOpened={isInfoTooltipOpen}
                        handlePopupClick={handlePopupClick}
                        isSuccess={isSuccess}
                        infoMessage={infoMessage}
                    />
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
