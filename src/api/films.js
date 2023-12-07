import request from '@/utils/request';

export function getTopFilms(data) {
    return request({
        url: `/v2.2/films/collections?type=${data.type}&page=${data.page}`,
        method: 'GET'
    });
}

// версия 2.1
export function getSearchFilms(data) {
    return request({
        url: `/v2.1/films/search-by-keyword?keyword=${data.search}&page=${data.page}`,
        method: 'GET'
    });
}

export function getMovie(data) {
    return request({
        url: `/v2.2/films/${data.id}`,
        method: 'GET'
    });
}
