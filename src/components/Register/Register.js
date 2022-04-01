import logoPath from '../../images/header-logo.svg';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

function Register(props) {
    return (
        <main className='register'>
            <Link className='register__logo' to='/'>
                <img src={logoPath} alt='Логотип Movies' />
            </Link>
            <h1 className='register__welcome'>Добро пожаловать!</h1>
            <Form User={props.User} formId='register' />
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
