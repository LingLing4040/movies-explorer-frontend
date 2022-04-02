import React from 'react';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { useLocation } from 'react-router-dom';

function SearchForm({
    handleSearch,
    handleSearchSaved,
    updateIsShort,
    isShort,
    isShortSaved,
    updateIsShortSaved,
    keyword,
    updateKeyword,
    keywordSaved,
    updateKeywordSaved,
}) {
    const location = useLocation().pathname;

    const [isFormActive, setIsFormActive] = React.useState(false);

    function handleInputClick() {
        setIsFormActive(true);
    }

    function handleInputLeave() {
        setIsFormActive(false);
    }

    function handleKeyword(e) {
        updateKeyword(e.target.value);
    }
    function handleKeywordSaved(e) {
        updateKeywordSaved(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        location === '/movies'
            ? localStorage.setItem('keyword', keyword)
            : localStorage.setItem('keywordSaved', keywordSaved);
        location === '/movies' ? handleSearch() : handleSearchSaved();
    }

    React.useEffect(() => {
        location === '/movies' ? handleSearch() : handleSearchSaved();
    }, [isShort, isShortSaved]);

    return (
        <div className='search-form'>
            <form
                className={`search-form__form ${isFormActive ? 'search-form__form_active' : ''}`}
                onSubmit={handleSubmit}
                noValidate
            >
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
                        onChange={location === '/movies' ? handleKeyword : handleKeywordSaved}
                        value={location === '/movies' ? keyword : keywordSaved}
                    />
                </label>
                <button type='submit' className='search-form__button'>
                    Поиск
                </button>
            </form>
            <FilterCheckBox
                isShort={isShort}
                updateIsShort={updateIsShort}
                isShortSaved={isShortSaved}
                updateIsShortSaved={updateIsShortSaved}
            />
        </div>
    );
}

export default SearchForm;
