import React from 'react';
import { useLocation } from 'react-router-dom';
import logoPath from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

function Header(props) {
    const location = useLocation().pathname;
    const headerClassName = `header ${location === '/' ? 'header_main' : ''}`;

    return (
        <header className={headerClassName}>
            <div className='header__container'>
                <Link className='header__link' to='/'>
                    <img src={logoPath} alt='Логотип Movies' />
                </Link>
                <Navigation isLoggedIn={props.isLoggedIn} windowWidth={props.windowWidth} />
            </div>
        </header>
    );
}

export default Header;
