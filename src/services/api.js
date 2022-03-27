import axios from 'axios';

const api = axios.create({
    baseURL: 'https://to-do-list-juliozambom.herokuapp.com'
});

export default api;