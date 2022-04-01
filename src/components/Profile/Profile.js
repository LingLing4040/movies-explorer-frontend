function Profile(props) {
    return (
        <main className='profile page__container'>
            <h1 className='profile__welcome'>Привет, {props.User.name}!</h1>
            <form className='profile__form' id='profile'>
                <div className={'profile__info'}>
                    <label htmlFor='username' className='profile__label'>
                        Имя
                        {/* <span className='popup__error profile-name-input-error'></span> */}
                    </label>
                    <input
                        className='profile__input'
                        name='user-name-input'
                        id='username'
                        type='text'
                        placeholder='Имя профиля'
                        required
                        minLength='2'
                        maxLength='40'
                        value={props.User.name || ''}
                        // onChange={handleChangeName}
                    />
                </div>
                <div className={'profile__info'}>
                    <label className='profile__label'>E-mail</label>
                    <input
                        id='email'
                        name='email-input'
                        type='email'
                        placeholder='email'
                        className='profile__input'
                        required
                        minLength='2'
                        maxLength='40'
                        value={props.User.email || ''}

                        // onChange={handleChangeEmail}
                    />
                </div>
            </form>
            <div className='profile__buttons'>
                <button className='profile__submit-edit' type='submit'>
                    {/* onSubmit={handleSubmitEdit} */}
                    Редактировать
                </button>
                <button className='profile__logout' type='button'>
                    {/* onClick={onLogout} */}
                    Выйти из аккаунта
                </button>
            </div>
        </main>
    );
}

export default Profile;
