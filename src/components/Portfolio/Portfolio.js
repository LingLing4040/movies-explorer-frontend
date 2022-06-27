import React from 'react';

function Portfolio() {
    return (
        <section className='portfolio '>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__projects'>
                <li className='portfolio__project'>
                    <p className='portfolio__project-name'>Одностраничный сайт</p>
                    <a
                        className='portfolio__link'
                        href='https://lingling4040.github.io/how-to-learn/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        ↗
                    </a>
                </li>
                <li className='portfolio__project'>
                    <p className='portfolio__project-name'>Адаптивный сайт</p>
                    <a
                        className='portfolio__link'
                        href='https://lingling4040.github.io/russian-travel/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        ↗
                    </a>
                </li>
                <li className='portfolio__project'>
                    <p className='portfolio__project-name'>Одностраничное приложение</p>
                    <a
                        className='portfolio__link'
                        href='https://cool.domainname.students.nomoredomains.xyz/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        ↗
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
