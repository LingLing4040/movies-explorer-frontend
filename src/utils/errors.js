export function errorsMessages(err) {
    if (err.status === 400) {
        return `Ошибка ${err.status}. Не верно заполнено одно из полей.`;
    } else if (err.status === 401) {
        return `Ошибка ${err.status}. Вы ввели неправильный логин или пароль.`;
    } else if (err.status === 403) {
        return `Ошибка ${err.status}. Токен не передан или передан не в том формате.`;
    } else if (err.status === 404) {
        return `Ошибка ${err.status}. Данные не найдены.`;
    } else if (err.status === 409) {
        return `Ошибка ${err.code}. Пользователь с таким email уже существует.`;
    } else if (err.status === 429) {
        return `Ошибка ${err.status}. Слишком много запросов. Попробуйте позже.`;
    } else if (err.status === 500) {
        return `Ошибка ${err.status}. На сервере произошла ошибка.`;
    } else {
        return `Ошибка ${err.status}. Ошибка сервера.`;
    }
}

export const messages = {
    defaultErrorMessage: 'Что-то пошло не так',
    serverError:
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
    movieNotFound: 'Ничего не найдено',
    noUsersMovies: 'Нет сохраненных фильмов',
    moviesWereNotSearched: 'Вы еще не выполняли поиск',
    searchMovieFormErrorMessage: 'Нужно ввести ключевое слово',
    signInError: 'Что-то пошло не так...',
    signUpError: 'Что-то пошло не так...',
    profileEditErrorMessage: 'Что-то пошло не так...',
    profileEditSuccessMessage: 'Данные изменены',
    // emailInputError: 'Введите корректный email.',
    // nameInputError: 'От 2 до 30 символов. Только буквы, пробел и дефис.',
    // passwordInputError: 'От 2 до 30 символов'
};
