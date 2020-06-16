import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/tabbar/home'
import shopping from '@/components/tabbar/shopping'
import login from '@/components/tabbar/login'
import register from '@/components/tabbar/register'
import newlist from '../components/news/newlist'
import newscontent from '../components/newscontent/newscontent'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: home },
    { path: '/shopping', component: shopping },
    { path: '/login', component: login },
    { path: '/register', component: register },
    { path: '/home/newlist', component: newlist },
    {path: '/home/newlist/:id', component: newscontent }
  ],
  linkActiveClass: 'mui-active'//将mui的默认高亮类 替换成路由自动添加上的那个类 做到高亮功能
})
