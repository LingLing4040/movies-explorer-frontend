import React from 'react';

function Footer() {
    return (
        <footer className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__links'>
                <p className='footer__year'>@2022</p>
                <ul className='footer__list'>
                    <li className='footer__list-item'>
                        <a
                            className='footer__link'
                            href='https://praktikum.yandex.ru/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className='footer__list-item'>
                        <a
                            className='footer__link'
                            href='https://github.com/LingLing4040'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
