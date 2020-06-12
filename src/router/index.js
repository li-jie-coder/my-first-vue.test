import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/components/Account'
import shopping from '@/components/shopping'
import login from '@/components/login'
import my from '@/components/my'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Account',
      component:Account,
      children:[
        {path:'shopping',component:shopping},
        {path:'my',component:my},
        {path:'login',component:login},
        {path:'register',component:register}
      ]
    }
  ]
})
