import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    // const history = useHistory();
    return (
        <main className='not-found-page'>
            <h1 className='not-found-page__title'>404</h1>
            <p className='not-found-page__text'>Страница не найдена</p>
            <Link className='not-found-page__link' to='/'>
                Назад
            </Link>
        </main>
    );
}

export default NotFoundPage;
