import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Login from 'view/signup/Login'
import Register from 'view/signup/Register'
import Footermenu from 'view/Footermenu'
import ProductDetailsPage from 'view/purchase/ProductDetailsPage'
import ClassifyPage from 'view/purchase/ClassifyPage'
import ShopPage from 'view/shop/ShopPage'
import ShoppingCart from 'view/purchase/ShoppingCart'
import MyShop from 'view/shop/MyShop'
import NewProduct from 'view/shop/NewProduct'
import ManageShelf from 'view/shop/ManageShelf'
import ShopMessage from 'view/shop/ShopMessage'
import MyCollection from 'view/other/MyCollection'
import SearchGoods from 'view/other/SearchGoods'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/Login',
        name: 'Login',
        component: Login
    }, {
        path: '/Register',
        name: 'Register',
        component: Register
    }, {
        path: '/',
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
    }, {
        path: '/ShoppingCart',
        name: 'ShoppingCart',
        component: ShoppingCart
    }, {
        path: '/MyShop',
        name: 'MyShop',
        component: MyShop
    }, {
        path: '/NewProduct',
        name: 'NewProduct',
        component: NewProduct
    }, {
        path: '/ManageShelf',
        name: 'ManageShelf',
        component: ManageShelf
    }, {
        path: '/ShopMessage',
        name: 'ShopMessage',
        component: ShopMessage
    }, {
        path: '/MyCollection',
        name: 'MyCollection',
        component: MyCollection
    }, {
        path: '/SearchGoods',
        name: 'SearchGoods',
        component: SearchGoods
    }]
})