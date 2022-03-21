import React from 'react';
import logoPath from '../../images/promo-logo.svg';

function Promo() {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <div className='promo__text'>
                    <h1 className='promo__title'>
                        Учебный проект студента факультета{' '}
                        <span className='promo__title-span'>Веб-разработки</span>.
                    </h1>
                    <p className='promo__subtitle'>
                        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                    </p>
                    <a className='promo__link' href='#AboutProject'>
                        Узнать больше
                    </a>
                </div>
                <img className='promo__logo' src={logoPath} alt='Логотип в виде планеты'></img>
            </div>
        </section>
    );
}

export default Promo;
