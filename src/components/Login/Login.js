import React from 'react';
import logoPath from '../../images/header-logo.svg';
import Form from '../Form/Form';
import { Link, useHistory } from 'react-router-dom';
import * as Auth from '../../utils/Auth.js';

function Login(props) {
    const history = useHistory();

    const [userData, setUserData] = React.useState({
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
        if (!userData.email || !userData.password) {
            return;
        }
        const { password, email } = userData;
        Auth.login(password, email)
            .then((res) => {
                if (res) {
                    setUserData({ email: '', password: '' });
                    props.handleLogin();
                } else {
                    setUserData({
                        ...userData,
                        message: 'Что-то пошло не так!',
                    });
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <main className='login'>
            <Link className='login__logo' to='/'>
                <img src={logoPath} alt='Логотип Movies' />
            </Link>
            <h1 className='login__welcome'>Рады видеть!</h1>
            <Form
                formId='login'
                onSubmit={handleSubmit}
                userData={userData}
                handleChange={handleChange}
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
