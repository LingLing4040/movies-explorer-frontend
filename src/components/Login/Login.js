import logoPath from '../../images/header-logo.svg';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <main className='login'>
            <Link className='login__logo' to='/'>
                <img src={logoPath} alt='Логотип Movies' />
            </Link>
            <h1 className='login__welcome'>Рады видеть!</h1>
            <Form User={props.User} formId='login' />
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
