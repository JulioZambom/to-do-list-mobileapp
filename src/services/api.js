import { create } from 'apisauce';

const api = create({
    baseURL: 'https://to-do-list-juliozambom.herokuapp.com'
});

export default api;