const basicAuth = 'Basic ' + btoa('admin:district');
const headers = new Headers({
    'Authorization': basicAuth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});

class tracker {
    config = {
        baseUrl: '',
    };

    setConfig = config => {
        this.config = config;
    };

programs= id => {
        return fetch(`${this.config.baseUrl}/programs/`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };

    enrollments= id => {
        return fetch(`${this.config.baseUrl}/enrollments/`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };


}

export default new Api();
