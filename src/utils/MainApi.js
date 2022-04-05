class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
            credentials: 'include',
        }).then(this._returnData);
    }

    editInfo(newInfo) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(newInfo),
            credentials: 'include',
        }).then(this._returnData);
    }

    saveMovie(movie) {
        const { country, director, duration, year, description, nameRU, nameEN } = movie;
        return fetch(`${this.baseUrl}/movies`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                country: country || 'Неизвестно',
                director: director || 'Неизвестно',
                duration,
                year,
                description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink:
                    movie.trailerLink ||
                    'https://easy-comp.ru/media/k2/items/cache/e9432fccf28a953514f077b86e5e657a_XL.jpg',
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                nameRU,
                nameEN: nameEN || 'Пусто',
                movieId: movie.id,
            }),
            credentials: 'include',
        }).then(this._returnData);
    }

    deleteMovie(id) {
        return fetch(`${this.baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: this.headers,
            credentials: 'include',
        }).then(this._returnData);
    }

    getSavedMovies() {
        return fetch(`${this.baseUrl}/movies`, {
            headers: this.headers,
            credentials: 'include',
        }).then(this._returnData);
    }

    _returnData(res) {
        if (res.ok) {
            return res.json();
        }
        return res.json().then((message) => Promise.reject(message));
    }
}

const mainApi = new Api({
    baseUrl: 'https://api.filatov-movies.nomoredomains.work',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
});

export default mainApi;
