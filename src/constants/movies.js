import image1Path from '../images/card1.png';
import image2Path from '../images/card2.png';
import image3Path from '../images/card3.png';
import image4Path from '../images/card4.png';
import image5Path from '../images/card5.png';
import image6Path from '../images/card6.png';
import image7Path from '../images/card7.png';
import image8Path from '../images/card8.png';
import image9Path from '../images/card9.png';
import image10Path from '../images/card10.png';
import image11Path from '../images/card11.png';
import image12Path from '../images/card12.png';

export const movies = [
    { name: '33 слова о дизайне', duration: '1ч 47м', imagePath: image1Path, isLiked: true },
    {
        name: 'Киноальманах «100 лет дизайна»',
        duration: '1ч 3м',
        imagePath: image2Path,
        isLiked: false,
    },
    {
        name: 'В погоне за Бенкси',
        duration: '1ч 42м',
        imagePath: image3Path,
        isLiked: false,
    },
    {
        name: 'Баския: Взрыв реальности',
        duration: '1ч 21м',
        imagePath: image4Path,
        isLiked: false,
    },
    {
        name: 'Бег это свобода',
        duration: '1ч 44м',
        imagePath: image5Path,
        isLiked: false,
    },
    {
        name: 'Книготорговцы',
        duration: '1ч 37м',
        imagePath: image6Path,
        isLiked: true,
    },
    {
        name: 'Когда я думаю о Германии ночью',
        duration: '1ч 56м',
        imagePath: image7Path,
        isLiked: false,
    },
    {
        name: 'Gimme Danger: История Игги и The Stooge...',
        duration: '1ч 59м',
        imagePath: image8Path,
        isLiked: false,
    },
    {
        name: 'Дженис: Маленькая девочка грустит',
        duration: '1ч 42м',
        imagePath: image9Path,
        isLiked: true,
    },
    {
        name: 'Соберись перед прыжком',
        duration: '1ч 10м',
        imagePath: image10Path,
        isLiked: true,
    },
    {
        name: 'Пи Джей Харви: A dog called money',
        duration: '1ч 4м',
        imagePath: image11Path,
        isLiked: false,
    },
    {
        name: 'По волнам: Искусство звука в кино',
        duration: '1ч 7м',
        imagePath: image12Path,
        isLiked: false,
    },
];

export const savedMovies = movies.filter((movie) => movie.isLiked === true);
