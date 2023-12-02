import {defineStore} from 'pinia';
import {getSearchFilms, getTopFilms} from "@/api/films";
import debounce from 'debounce';
export const useSearchStore = defineStore('searchStore', {
    state: () => ({
        movies: [],
        searchResult: [],
        valueSearch: '',
        limit: 20,
        page: 1,
    }),
    getters: {},

    actions: {
        getData: debounce(async function () {
          const payload = {
            search: this.valueSearch,
            limit: this.limit,
            page: this.page,
          };
          try {
              this.movies = await getSearchFilms(payload);
          } catch (e) {
          }
          finally {
          }
        }, 500),

    }
});
