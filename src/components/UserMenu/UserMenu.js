import React from 'react';
import { Link } from 'react-router-dom';
import iconPath from '../../images/header-account-icon.svg';

function UserMenu() {
    return (
        <ul className='user-menu'>
            <li className='user-menu__button'>
                <Link className='user-menu__link' to='/movies'>
                    Фильмы
                </Link>
            </li>
            <li className='user-menu__button'>
                <Link className='user-menu__link' to='/saved-movies'>
                    Сохранённые фильмы
                </Link>
            </li>
            <li className='user-menu__button'>
                <img className='user-menu__account-icon' src={iconPath} alt='Иконка профиля'></img>
                <Link className='user-menu__link' to='/profile'>
                    Аккаунт
                </Link>
            </li>
        </ul>
    );
}

export default UserMenu;
