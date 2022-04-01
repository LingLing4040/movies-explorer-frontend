import React from 'react';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm() {
    const [isFormActive, setIsFormActive] = React.useState(false);

    function handleInputClick() {
        setIsFormActive(true);
    }

    function handleInputLeave() {
        setIsFormActive(false);
    }

    return (
        <div className='search-form'>
            <form className={`search-form__form ${isFormActive ? 'search-form__form_active' : ''}`}>
                <label htmlFor='movie' className='search-form__label'>
                    <input
                        name='movie'
                        id='movie'
                        type='search'
                        placeholder='Фильм'
                        className='search-form__input'
                        required
                        onClick={handleInputClick}
                        onBlur={handleInputLeave}
                    />
                </label>
                <button type='submit' className='search-form__button'>
                    Поиск
                </button>
            </form>
            <FilterCheckBox />
        </div>
    );
}

export default SearchForm;
