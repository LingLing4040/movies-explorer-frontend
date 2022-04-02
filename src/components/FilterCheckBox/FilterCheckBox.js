import React from 'react';
import { useLocation } from 'react-router-dom';

function FilterCheckBox({ isShort, updateIsShort, isShortSaved, updateIsShortSaved }) {
    const location = useLocation().pathname;
    return (
        <div className='filter-checkbox'>
            <label htmlFor='short' className='filter-checkbox__label'>
                <input
                    name='checkbox'
                    id='short'
                    type='checkbox'
                    className='filter-checkbox__input'
                    onChange={() =>
                        location === '/movies'
                            ? updateIsShort(!isShort)
                            : updateIsShortSaved(!isShortSaved)
                    }
                    checked={location === '/movies' ? isShort : isShortSaved}
                />
                <span className='filter-checkbox__span'></span>
            </label>
            <p className='filter-checkbox__text'>Короткометражки</p>
        </div>
    );
}

export default FilterCheckBox;
