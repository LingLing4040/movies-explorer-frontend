import React from 'react';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';

function SearchForm({ handleSearch, updateIsShort, isShort, keyword, updateKeyword }) {
    // const [keyword, setKeyword] = React.useState('');
    const [isFormActive, setIsFormActive] = React.useState(false);
    // const [isShort, setIsShort] = React.useState(false);

    // function handleCheckShort(e) {
    //     setIsShort(e.target.checked);
    // }

    function handleInputClick() {
        setIsFormActive(true);
    }

    function handleInputLeave() {
        setIsFormActive(false);
    }

    function handleKeyword(e) {
        // setKeyword(e.target.value.toString());
        updateKeyword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('keyword', keyword);
        handleSearch();
    }

    // React.useEffect(() => {
    //     setIsShort(localStorage.getItem('isShort') === 'true' ? true : false);
    //     setKeyword(localStorage.getItem('keyword'));
    //     // handleSearch();
    // }, []);

    React.useEffect(() => {
        // debugger;
        // localStorage.setItem('isShort', isShort);
        handleSearch();
    }, [isShort]);

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
                        onChange={handleKeyword}
                        value={keyword || ''}
                    />
                </label>
                <button type='submit' className='search-form__button'>
                    Поиск
                </button>
            </form>
            <FilterCheckBox
                // onChange={handleCheckShort}
                isShort={isShort}
                updateIsShort={updateIsShort}
            />
        </div>
    );
}

export default SearchForm;
