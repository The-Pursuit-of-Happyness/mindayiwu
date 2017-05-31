import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Login from 'view/signup/Login'
import Register from 'view/signup/Register'
import Footermenu from 'view/Footermenu'
import ProductDetailsPage from 'view/purchase/ProductDetailsPage'
import ClassifyPage from 'view/purchase/ClassifyPage'
import Charge from 'view/purchase/Charge'
import ShopPage from 'view/shop/ShopPage'
import ShoppingCart from 'view/purchase/ShoppingCart'
import MyShop from 'view/shop/MyShop'
import NewProduct from 'view/shop/NewProduct'
import ManageShelf from 'view/shop/ManageShelf'
import ShopMessage from 'view/shop/ShopMessage'
import MyCollection from 'view/other/MyCollection'
import Upload from 'view/other/Upload'
import EditGoods from 'view/shop/EditGoods'
import MyMessage from 'view/other/MyMessage'
import OrderInfo from 'view/purchase/OrderInfo'
import Evaluate from 'view/other/Evaluate'
import LeaveMessage from 'view/other/LeaveMessage'
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
        path: '/Upload',
        name: 'Upload',
        component: Upload
    }, {
        path: '/EditGoods',
        name: 'EditGoods',
        component: EditGoods
    }, {
        path: '/MyMessage',
        name: 'MyMessage',
        component: MyMessage
    }, {
        path: '/Charge',
        name: 'Charge',
        component: Charge
    }, {
        path: '/OrderInfo',
        name: 'OrderInfo',
        component: OrderInfo
    }, {
        path: '/Evaluate',
        name: 'Evaluate',
        component: Evaluate
    }, {
        path: '/LeaveMessage',
        name: 'LeaveMessage',
        component: LeaveMessage,
    }]
})