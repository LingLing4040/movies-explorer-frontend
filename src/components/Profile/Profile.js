import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ onUpdateUser, handleLogout }) {
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({ name, email });
    }

    return (
        <main className='profile page__container'>
            <h1 className='profile__welcome'>Привет, {currentUser.name}!</h1>
            <form className='profile__form' id='profile'>
                <div className={'profile__info'}>
                    <label htmlFor='name' className='profile__label'>
                        Имя
                        {/* <span className='popup__error profile-name-input-error'></span> */}
                    </label>
                    <input
                        className='profile__input'
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Имя профиля'
                        required
                        minLength='2'
                        maxLength='40'
                        value={name || ''}
                        onChange={handleChangeName}
                    />
                </div>
                <div className={'profile__info'}>
                    <label className='profile__label'>E-mail</label>
                    <input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='email'
                        className='profile__input'
                        required
                        minLength='2'
                        maxLength='40'
                        value={email || ''}
                        onChange={handleChangeEmail}
                    />
                </div>
            </form>
            <div className='profile__buttons'>
                <button className='profile__submit-edit' type='submit' onClick={handleSubmit}>
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
