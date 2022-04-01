import { useLocation } from 'react-router-dom';

function Form(props) {
    const location = useLocation().pathname;

    return (
        <form className='form' id={'register'}>
            {location === '/signup' && (
                <label className='form__label' htmlFor='username'>
                    Имя
                </label>
            )}
            {location === '/signup' && (
                <input
                    className='form__input'
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Имя профиля'
                    required
                    minLength='2'
                    maxLength='40'
                    value={props.User.name || ''}
                ></input>
            )}
            {/* <span className='form__input-error'>Что-то пошло не так...</span> */}
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
                minLength='2'
                maxLength='40'
                value={props.User.email || ''}
            ></input>
            {/* <span className='form__input-error'>Что-то пошло не так...</span> */}
            <label className='form__label' htmlFor='password'>
                Пароль
            </label>
            <input
                className='form__input form__input_red'
                id='password'
                type='password'
                name='password'
                placeholder='Пароль'
                required
                minLength='2'
                maxLength='40'
                value={props.User.password || ''}
            ></input>
            <span
                className={`form__input-error ${
                    props.formId === 'register' ? '' : 'form__input-error_hidden'
                }`}
            >
                Что-то пошло не так...
            </span>
            <button
                type='submit'
                className={`form__submit-button ${
                    props.formId === 'register' ? '' : 'form__submit-button_login'
                }`}
            >
                {props.formId === 'register' ? 'Зарегистрироваться' : 'Войти'}
            </button>
        </form>
    );
}

export default Form;
