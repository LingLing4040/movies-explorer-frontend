import React, { useCallback } from 'react';
import isEmail from 'validator/lib/isEmail';
import { useLocation } from 'react-router-dom';

function UseFormValidator(initialValues, initialIsinputValid, initialIsFormValid, initialErrors) {
    const [values, setValues] = React.useState(initialValues);
    const [isInputValid, setIsInputValid] = React.useState(initialIsinputValid);
    const [isFormValid, setIsFormValid] = React.useState(initialIsFormValid);
    const [errors, setErrors] = React.useState(initialErrors);
    const location = useLocation().pathname;

    const nameRegExp = /^[А-яёA-z\s\-]{2,30}$/;
    const passwordRegExp = /^.{2,30}$/;

    function validateName(name) {
        return nameRegExp.test(name);
    }

    function validateEmail(email) {
        return isEmail(email);
    }

    function validatePassword(password) {
        return passwordRegExp.test(password);
    }

    const validators =
        location === '/signup'
            ? {
                  name: {
                      validate: validateName,
                      message:
                          'Имя должно быть длиной от 2 до 30 символов и содержать только буквы, пробел или дефис',
                  },
                  email: {
                      validate: validateEmail,
                      message: 'Введите правильный E-mail',
                  },
                  password: {
                      validate: validatePassword,
                      message: 'Пароль должен быть длиной от 2 до 30 символов',
                  },
              }
            : location === '/signin'
            ? {
                  email: {
                      validate: validateEmail,
                      message: 'Введите правильный E-mail',
                  },
                  password: {
                      validate: validatePassword,
                      message: 'Пароль должен быть длиной от 2 до 30 символов',
                  },
              }
            : {
                  email: {
                      validate: validateEmail,
                      message: 'Введите правильный E-mail',
                  },
                  name: {
                      validate: validateName,
                      message:
                          'Имя должно быть длиной от 2 до 30 символов и содержать только буквы, пробел или дефис',
                  },
              };

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        let isValid = false;
        let validationMessage = '';
        if (value !== '') {
            isValid = validators[name].validate(value);
            validationMessage = isValid ? '' : validators[name].message;
        } else {
            isValid = target.validity.valid;
            validationMessage = target.validationMessage;
        }

        setValues({ ...values, [name]: value });
        setIsInputValid({ ...isInputValid, [name]: isValid });
        setErrors({ ...errors, [name]: validationMessage });
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsFormValid = false, newIsInputValid = false) => {
            setValues(newValues);
            setIsInputValid(newIsInputValid);
            setErrors(newErrors);
            setIsFormValid(newIsFormValid);
        },
        [setValues, setErrors, setIsFormValid, setIsInputValid]
    );

    React.useEffect(() => {
        setIsFormValid(Object.values(isInputValid).every((validity) => validity === true));
    }, [isInputValid]);

    return {
        values,
        setValues,
        isInputValid,
        errors,
        isFormValid,
        handleChange,
        resetForm,
    };
}

export default UseFormValidator;
