import React from 'react';
import logoPath from '../../images/header-logo.svg';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import * as Auth from '../../utils/Auth.js';
import useFormValidator from '../../hooks/UseFormValidator';

function Register({ handleLogin, handleInfoOpen, setInfoMessage, setIsSuccess }) {
    const { values, errors, isFormValid, handleChange } = useFormValidator(
        { name: '', email: '', password: '' },
        { name: false, email: false, password: false },
        { name: '', email: '', password: '' },
        false
    );

    function handleRegister(values) {
        const { name, password, email } = values;

        Auth.register(name, password, email)
            .then(() => {
                handleLogin();
            })
            .catch((err) => {
                setInfoMessage(err.message);
                handleInfoOpen(false);
                setIsSuccess(false);
            });
    }

    return (
        <main className='register'>
            <Link className='register__logo' to='/'>
                <img src={logoPath} alt='Логотип Movies' />
            </Link>
            <h1 className='register__welcome'>Добро пожаловать!</h1>
            <Form
                formId='register'
                onSubmit={handleRegister}
                values={values}
                errors={errors}
                handleChange={handleChange}
                isFormValid={isFormValid}
            />
            <div className='register__link-container'>
                <p className='register__link-text'>Уже зарегистрированы?</p>
                <Link className='register__link' to='/signin'>
                    Войти
                </Link>
            </div>
        </main>
    );
}

export default Register;
