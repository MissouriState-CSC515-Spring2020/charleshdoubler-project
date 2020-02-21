import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView'
import CategoryView from '@/views/CategoryView'
import AboutView from '@/views/AboutView'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/category',
            name: 'Category',
            props: true,
            component: CategoryView
        },
        {
            path: '/about',
            name: 'About',
            component: AboutView
        },
    ]

})
