import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Login from 'view/signup/Login'
import Register from 'view/signup/Register'
import Footermenu from 'view/Footermenu'
import ProductDetailsPage from 'view/purchase/ProductDetailsPage'
import ClassifyPage from 'view/purchase/ClassifyPage'
import ShopPage from 'view/shop/ShopPage'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/Register',
        name: 'Register',
        component: Register
    }, {
        path: '/Footermenu',
        name: 'Footermenu',
        component: Footermenu
    }, {
        path: '/ProductDetailsPage',
        name: 'ProductDetailsPage',
        component: ProductDetailsPage
    }, {
        path: '/ClassifyPage',
        name: 'ClassifyPage',
        component: ClassifyPage
    }, {
        path: '/ShopPage',
        name: 'ShopPage',
        component: ShopPage
    }]
})