import React from 'react';
import { Link } from 'react-router-dom';

function AuthMenu() {
    return (
        <ul className='auth-menu'>
            <li className='auth-menu__signup'>
                <Link className='auth-menu__link' to='/signup'>
                    Регистрация
                </Link>
            </li>
            <li className='auth-menu__signin'>
                <Link className='auth-menu__link auth-menu__link_signin' to='/signin'>
                    Войти
                </Link>
            </li>
        </ul>
    );
}

export default AuthMenu;
