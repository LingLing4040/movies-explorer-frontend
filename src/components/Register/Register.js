import React from 'react';
import logoPath from '../../images/header-logo.svg';
import Form from '../Form/Form';
import { Link, useHistory } from 'react-router-dom';
import * as Auth from '../../utils/Auth.js';

function Register({ handleLogin }) {
    const history = useHistory();

    const [userData, setUserData] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { name, password, email } = userData;

        Auth.register(name, password, email)
            .then((res) => {
                if (res) {
                    // props.handleInfoOpen(true);
                    handleLogin();
                    // setInfoMessage('Вы успешно зарегистрировались')
                } else {
                    setUserData({
                        ...userData,
                        message: 'Что-то пошло не так!',
                    });
                }
            })
            .catch((err) => {
                // props.handleInfoOpen(false);
                console.log(err);
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
                onSubmit={handleSubmit}
                userData={userData}
                handleChange={handleChange}
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
