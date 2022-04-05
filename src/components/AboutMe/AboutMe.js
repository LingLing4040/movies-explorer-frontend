import React from 'react';
import photoPath from '../../images/Student-photo.png';

function AboutMe() {
    return (
        <section className='about-me'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about-me__info'>
                    <h3 className='about-me__name'>Никита</h3>
                    <h4 className='about-me__occupation'>Веб-разработчик, 27 лет</h4>
                    <p className='about-me__background'>
                        Я родился в Омске. После школы переехал в Москву и поступил в МГТУ им.
                        Баумана. Закончив университет, пошёл работать инженером по специальности. В
                        последнее время стал понимать, что больше интересует Веб-разработка и, в
                        целом, программирование, поэтому в 2021 году поступил на курс Яндекс
                        Практикума "Веб-разработчик", успешно его окончил и теперь планирую сменить
                        профессию. Увлекаюсь музыкой, коллекционирую виниловые пластинки и хожу на
                        концерты в консерваторию, а также играю в баскетбол и большой теннис.
                    </p>
                    <ul className='about-me__links'>
                        <li>
                            <a
                                className='about-me__link'
                                href='https://vk.com/fltvnkt'
                                target='_blank'
                                rel='noreferrer'
                            >
                                VK
                            </a>
                        </li>
                        <li>
                            <a
                                className='about-me__link'
                                href='https://github.com/LingLing4040'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <img className='about-me__photo' src={photoPath} alt='Фото студента'></img>
            </div>
        </section>
    );
}

export default AboutMe;
