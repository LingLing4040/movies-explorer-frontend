import React from 'react';

function AboutProject() {
    return (
        <section className='about-project main-page__container' id='AboutProject'>
            <h2 className='about-project__title'>О проекте</h2>
            <div className='about-project__info'>
                <p className='about-project__info-title about-project__info-title_type_stages'>
                    Дипломный проект включал 5 этапов
                </p>
                <p className='about-project__info-title about-project__info-title_type_weeks'>
                    На выполнение диплома ушло 5 недель
                </p>
                <p className='about-project__info-subtitle about-project__info-subtitle_type_stages'>
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
                    финальные доработки.
                </p>
                <p className='about-project__info-subtitle about-project__info-subtitle_type_weeks'>
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
                    чтобы успешно защититься.
                </p>
            </div>
            <div className='about-project__bar'>
                <div className='about-project__backend-bar'>1 неделя</div>
                <div className='about-project__frontend-bar'>4 недели</div>
                <p className='about-project__bar-info'>Back-end</p>
                <p className='about-project__bar-info'>Front-end</p>
            </div>
        </section>
    );
}

export default AboutProject;
