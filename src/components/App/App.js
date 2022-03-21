import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Switch, Redirect, useHistory, BrowserRouter } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
    const [currentUser, setCurrentUser] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = React.useState(true);
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    function setWidth() {
        setWindowWidth(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener('resize', setWidth);
        return () => {
            window.removeEventListener('resize', setWidth);
        };
    });

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className='page'>
                <div className='content'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/'>
                                <Header isLoggedIn={false} windowWidth={windowWidth} />
                                <Main />
                                <Footer />
                            </Route>
                            <Route path='/movies'>
                                <Header isLoggedIn={isLoggedIn} windowWidth={windowWidth} />
                                <Movies />
                                <Footer />
                            </Route>
                            <Route path='/saved-movies'>
                                <Header isLoggedIn={isLoggedIn} windowWidth={windowWidth} />
                                <SavedMovies />
                                <Footer />
                            </Route>
                            <Route path='/profile'>
                                <Header isLoggedIn={isLoggedIn} windowWidth={windowWidth} />
                                <Profile
                                    User={{
                                        name: 'Виталий',
                                        email: 'pochta@yandex.ru',
                                    }}
                                />
                            </Route>
                            <Route path='/signup'>
                                <Register
                                    User={{
                                        name: 'Виталий',
                                        email: 'pochta@yandex.ru',
                                        password: '12345678901234',
                                    }}
                                />
                            </Route>
                            <Route path='/signin'>
                                <Login
                                    User={{
                                        email: 'pochta@yandex.ru',
                                    }}
                                />
                            </Route>
                            <Route path='/notfoundpage'>
                                <NotFoundPage />
                            </Route>
                            {/* <Route path='*'>
                                <Redirect to='/' />
                            </Route> */}
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
