class MoviesApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getMovies() {
        return fetch(`${this.baseUrl}/beatfilm-movies`, {
            headers: this.headers,
        }).then(this._returnData);
    }

    _returnData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default moviesApi;
