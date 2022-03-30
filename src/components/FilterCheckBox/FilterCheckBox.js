import React from 'react';

function FilterCheckBox({ isShort, updateIsShort }) {
    return (
        <div className='filter-checkbox'>
            <label htmlFor='short' className='filter-checkbox__label'>
                <input
                    name='checkbox'
                    id='short'
                    type='checkbox'
                    className='filter-checkbox__input'
                    onChange={() => updateIsShort(!isShort)}
                    checked={isShort}
                />
                <span className='filter-checkbox__span'></span>
            </label>
            <p className='filter-checkbox__text'>Короткометражки</p>
        </div>
    );
}

export default FilterCheckBox;
