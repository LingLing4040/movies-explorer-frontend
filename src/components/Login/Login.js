import React from 'react';
import logoPath from '../../images/header-logo.svg';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import * as Auth from '../../utils/Auth.js';
import useFormValidator from '../../hooks/UseFormValidator';

function Login({ handleLogin, handleInfoOpen, setInfoMessage, setIsSuccess }) {
    const { values, errors, isFormValid, handleChange } = useFormValidator(
        { email: '', password: '' },
        { email: false, password: false },
        { email: '', password: '' },
        false
    );

    function handleSignin(values) {
        const { password, email } = values;

        Auth.login(password, email)
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
        <main className='login'>
            <Link className='login__logo' to='/'>
                <img src={logoPath} alt='Логотип Movies' />
            </Link>
            <h1 className='login__welcome'>Рады видеть!</h1>
            <Form
                formId='login'
                onSubmit={handleSignin}
                values={values}
                errors={errors}
                handleChange={handleChange}
                isFormValid={isFormValid}
            />
            <div className='login__link-container'>
                <p className='login__link-text'>Ещё не зарегистрированы?</p>
                <Link className='login__link' to='/signup'>
                    Регистрация
                </Link>
            </div>
        </main>
    );
}

export default Login;
