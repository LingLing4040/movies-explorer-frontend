export const baseUrl = 'https://api.filatov-movies.nomoredomains.work';

const returnData = (res) => {
    if (res.ok) {
        return res.json();
    }

    return res.json().then((message) => Promise.reject(message));
};

export const register = (name, password, email) => {
    return fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password, email }),
        credentials: 'include',
    })
        .then(returnData)
        .then((data) => {
            if (data) {
                localStorage.setItem('token', data.token);
                return data;
            }
        });
};

export const login = (password, email) => {
    return fetch(`${baseUrl}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, email }),
        credentials: 'include',
    })
        .then(returnData)
        .then((data) => {
            if (data) {
                localStorage.setItem('token', data.token);
                return data;
            }
        });
};

export const getContent = () => {
    return fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    })
        .then(returnData)
        .then((data) => data);
};
