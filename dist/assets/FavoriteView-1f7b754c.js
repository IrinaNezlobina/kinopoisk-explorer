import{u as c}from"./FavoriteStore-43c0cbe9.js";import{_ as i,m,r as _,o as e,c as o,F as v,a as l,b as d,d as f}from"./index-abd9ac34.js";const p={name:"FavoriteView.vue",setup(){return{favStore:c()}},methods:{},computed:{},components:{movieItem:m}},u={key:0,class:"movies__list"},h={key:1,class:"empty"},k=f("h1",null," Вы еще ничего не добавили ",-1),F=[k];function S(s,y,B,t,x,V){const r=_("movie-item");return t.favStore.favoriteArr.length?(e(),o("div",u,[(e(!0),o(v,null,l(t.favStore.favoriteArr,(a,n)=>(e(),d(r,{key:n,movie:a},null,8,["movie"]))),128))])):(e(),o("div",h,F))}const A=i(p,[["render",S]]);export{A as default};
