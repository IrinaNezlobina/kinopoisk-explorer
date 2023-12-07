import { defineStore } from 'pinia';

export const useFavStore = defineStore('favStore', {
    state: () => ({
        favoriteArr: []
    }),

    actions: {
        addToFavorite(item) {
            if (this.favoriteArr.find((el) => el.kinopoiskId === item.kinopoiskId)) {
                console.log(this.favoriteArr, item);
                const product = this.favoriteArr.find((el) => el.kinopoiskId === item.kinopoiskId);

                const index = this.favoriteArr.indexOf(product);
                this.favoriteArr.splice(index, 1);
            } else {
                console.log(this.favoriteArr);
                this.favoriteArr.push(item);
            }
        }
    },
    persist: true
});
