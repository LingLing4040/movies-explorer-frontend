import React from 'react';
import { useLocation } from 'react-router-dom';

function Form({ onSubmit, formId, values, handleChange, errors, isFormValid }) {
    const location = useLocation().pathname;

    function handleSubmit(evt) {
        evt.preventDefault();

        onSubmit(values);
    }

    return (
        <form className='form' id={formId} onSubmit={handleSubmit} noValidate>
            {location === '/signup' && (
                <label className='form__label' htmlFor='username'>
                    Имя
                </label>
            )}
            {location === '/signup' && (
                <>
                    <input
                        className='form__input'
                        id='name'
                        type='text'
                        name='name'
                        placeholder='Имя профиля'
                        required
                        value={values.name}
                        onChange={handleChange}
                    ></input>
                    <span className='form__input-error'>{errors.name}</span>
                </>
            )}
            <label className='form__label' htmlFor='email'>
                E-mail
            </label>
            <input
                className='form__input'
                id='email'
                type='email'
                name='email'
                placeholder='E-mail'
                required
                value={values.email}
                onChange={handleChange}
            ></input>
            <span className='form__input-error'>{errors.email}</span>
            <label className='form__label' htmlFor='password'>
                Пароль
            </label>
            <input
                className='form__input '
                id='password'
                type='password'
                name='password'
                placeholder='Пароль'
                required
                value={values.password}
                onChange={handleChange}
            ></input>

            <span className='form__input-error '>{errors.password}</span>
            <button
                disabled={!isFormValid}
                type='submit'
                className={`form__submit-button ${
                    formId === 'register' ? '' : 'form__submit-button_login'
                } ${isFormValid ? '' : 'form__submit-button_inactive'}`}
            >
                {formId === 'register' ? 'Зарегистрироваться' : 'Войти'}
            </button>
        </form>
    );
}

export default Form;
