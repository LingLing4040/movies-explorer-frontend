import React from 'react';
import AuthMenu from '../AuthMenu/AuthMenu';
import iconPath from '../../images/burger.svg';
import UserMenu from '../UserMenu/UserMenu';
import MobileNav from '../MobileNav/MobileNav';

function Navigation(props) {
    const [isMobileNavOpened, setIsMobileNavOpened] = React.useState(false);

    function handleMenuClick() {
        setIsMobileNavOpened(!isMobileNavOpened);
    }

    return (
        <nav className='nav'>
            {props.isLoggedIn && props.windowWidth >= 1280 && <UserMenu />}
            {!props.isLoggedIn && <AuthMenu />}
            {props.isLoggedIn && props.windowWidth < 1280 && (
                <button className='nav__burger-button' type='button' onClick={handleMenuClick}>
                    <img src={iconPath} alt='Иконка бургер меню'></img>
                </button>
            )}
            {isMobileNavOpened && <MobileNav handleMenuClick={handleMenuClick} />}
        </nav>
    );
}

export default Navigation;
