import axios from 'axios';

const BASE_API = import.meta.env.VITE_APP_BASE_API;
const SECRET_KEY = import.meta.env.VITE_API_KEY;

const service = axios.create({
    baseURL: BASE_API
});

/* Настройка всех запросов */
service.interceptors.request.use(
    (config) => {
        const conf = config;

        conf.headers['X-API-KEY'] = SECRET_KEY;
        conf.headers['Content-Type'] = 'application/json';

        return conf;
    },
    (error) => {
        Promise.reject(error);
    }
);

/* Настройка всех ответов */
service.interceptors.response.use(
    (response) => {
        const { data } = response;

        return data;
    },
    (error) => {
        return Promise.reject(new Error(error));
    }
);

export { BASE_API };

export default service;