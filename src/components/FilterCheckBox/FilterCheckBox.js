function FilterCheckBox() {
    return (
        <div className='filter-checkbox'>
            <label htmlFor='short' className='filter-checkbox__label'>
                <input
                    name='checkbox'
                    id='short'
                    type='checkbox'
                    className='filter-checkbox__input'
                    defaultChecked
                />
                <span className='filter-checkbox__span'></span>
            </label>
            <p className='filter-checkbox__text'>Короткометражки</p>
        </div>
    );
}

export default FilterCheckBox;
