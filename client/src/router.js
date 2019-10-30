import Vue from 'vue'
import Router from 'vue-router'
import Quiz from './components/Quiz'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Quiz
        },
        {
            path: '/category',
            name: 'category',
            component: Quiz
        }
    ]
})