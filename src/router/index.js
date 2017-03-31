import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Login from 'view/signup/Login'
import Register from 'view/signup/Register'
import Home from 'view/Home'

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
        name: 'Home',
        component: Home
    }]
})