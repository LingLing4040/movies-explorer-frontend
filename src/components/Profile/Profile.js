import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useFormValidator from '../../hooks/UseFormValidator';

function Profile({ onUpdateUser, handleLogout }) {
    const currentUser = React.useContext(CurrentUserContext);

    const { values, setValues, errors, isFormValid, handleChange } = useFormValidator(
        { name: '', email: '' },
        { name: false, email: false },
        { name: '', email: '' },
        false
    );

    React.useEffect(() => {
        setValues((previousValues) => {
            const newValues = { ...previousValues };

            Object.keys(newValues).forEach((input) => {
                newValues[input] = currentUser[input];
            });

            return newValues;
        });
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(values);
    }

    return (
        <main className='profile page__container'>
            <h1 className='profile__welcome'>Привет, {currentUser.name}!</h1>
            <form className='profile__form' id='profile' noValidate>
                <div className='profile__info'>
                    <label htmlFor='name' className='profile__label'>
                        Имя
                    </label>
                    <input
                        className='profile__input'
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Имя профиля'
                        required
                        value={values.name}
                        onChange={handleChange}
                    />
                </div>
                <span className='profile__input-error'>{errors.name}</span>
                <div className='profile__info'>
                    <label className='profile__label'>E-mail</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='email'
                        className='profile__input'
                        required
                        value={values.email || ''}
                        onChange={handleChange}
                    />
                </div>
                <span className='profile__input-error'>{errors.email}</span>
            </form>
            <div className='profile__buttons'>
                <button
                    disabled={!isFormValid}
                    className={`profile__submit-edit ${
                        isFormValid ? '' : 'profile__submit-edit_inactive'
                    }`}
                    type='submit'
                    onClick={handleSubmit}
                >
                    Редактировать
                </button>
                <button className='profile__logout' type='button' onClick={handleLogout}>
                    Выйти из аккаунта
                </button>
            </div>
        </main>
    );
}

export default Profile;
