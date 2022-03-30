import { useLocation } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';

function Form(props) {
    const { values, errors, isValid, handleChange, resetForm } = useValidation();
    const location = useLocation().pathname;

    return (
        <form className='form' id={props.formId} onSubmit={props.onSubmit}>
            {location === '/signup' && (
                <label className='form__label' htmlFor='username'>
                    Имя
                </label>
            )}
            {location === '/signup' && (
                <input
                    className='form__input'
                    id='name'
                    type='text'
                    name='name'
                    placeholder='Имя профиля'
                    required
                    minLength='2'
                    maxLength='40'
                    value={props.userData.name}
                    onChange={props.handleChange}
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
                value={props.userData.email}
                onChange={props.handleChange}
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
                value={props.userData.password}
                onChange={props.handleChange}
            ></input>
            <span className={`form__input-error`}>Что-то пошло не так...</span>
            <span className='form__input-error profile-name-input-error'></span>
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
