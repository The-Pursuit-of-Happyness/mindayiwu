// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import router from './router'

import home from './view/Home'; // import home
import recordpage from './view/Recordpage' //import recordpage
import orderpage from './view/Orderpage' //import orderpage
import mypage from './view/mypage' //import mypage
Vue.component('home', home); // statement home
Vue.component('recordpage', recordpage); //statement recordpage
Vue.component('orderpage', orderpage); //statement orderpage
Vue.component('mypage', mypage); //statement mypage

import slider from './view/components/Slider';
import orderitem from './view/components/OrderItem';
import space from './view/components/Space';
import recommenitem from './view/components/RecommenItem';
import classifyitem from './view/components/ClassifyItem';
import evaluate from './view/components/Evaluate';
import linkitem from './view/components/LinkItem';
import shopgoodsitem from './view/components/ShopGoodsItem';
import shoppingcartitem from './view/components/ShoppingCartItem';
import cartitem from './view/components/cartitem';
import myshopgoodsitem from './view/components/MyShopGoodsItem';
Vue.component('slider', slider);
Vue.component('orderitem', orderitem);
Vue.component('space', space);
Vue.component('recommenitem', recommenitem);
Vue.component('classifyitem', classifyitem);
Vue.component('evaluate', evaluate);
Vue.component('linkitem', linkitem);
Vue.component('shopgoodsitem', shopgoodsitem);
Vue.component('shoppingcartitem', shoppingcartitem);
Vue.component('cartitem', cartitem);
Vue.component('myshopgoodsitem', myshopgoodsitem);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})