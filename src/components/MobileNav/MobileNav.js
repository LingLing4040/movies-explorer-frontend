import React from 'react';
import { Link } from 'react-router-dom';
import closeIconPath from '../../images/close-button.svg';
import accountIconPath from '../../images/header-account-icon.svg';

function MobileNav(props) {
    return (
        <div className='mobile-nav'>
            <nav className='mobile-nav__container'>
                <button
                    className='mobile-nav__close-button'
                    type='button'
                    onClick={props.handleMenuClick}
                >
                    <img src={closeIconPath} alt='Крестик'></img>
                </button>
                <ul className='mobile-nav__list'>
                    <li className='mobile-nav__list-item'>
                        <Link className='mobile-nav__link' to='/'>
                            Главная
                        </Link>
                    </li>
                    <li className='mobile-nav__list-item'>
                        <Link className='mobile-nav__link' to='/movies'>
                            Фильмы
                        </Link>
                    </li>
                    <li className='mobile-nav__list-item'>
                        <Link className='mobile-nav__link' to='/saved-movies'>
                            Сохранённые фильмы
                        </Link>
                    </li>
                </ul>
                <Link className='mobile-nav__profile-link' to='/profile'>
                    <img
                        className='mobile-nav__account-icon'
                        src={accountIconPath}
                        alt='Иконка профиля'
                    ></img>
                    Аккаунт
                </Link>
            </nav>
        </div>
    );
}

export default MobileNav;
