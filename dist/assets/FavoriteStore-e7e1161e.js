import{i as s}from"./index-1ffaf0de.js";const a=s("favStore",{state:()=>({favoriteArr:[]}),getters:{},actions:{addToFavorite(o){if(this.favoriteArr.find(r=>r.kinopoiskId===o.kinopoiskId)){console.log(this.favoriteArr,o);const r=this.favoriteArr.find(t=>t.kinopoiskId===o.kinopoiskId),i=this.favoriteArr.indexOf(r);this.favoriteArr.splice(i,1)}else console.log(this.favoriteArr),this.favoriteArr.push(o)}},persist:!0});export{a as u};
