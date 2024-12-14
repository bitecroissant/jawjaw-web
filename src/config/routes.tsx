import { RouteRecordRaw } from 'vue-router'
import { Home } from '../views/Home'
import { SignInPage } from '../views/SginInPage'
import { ajax } from '../shared/ajax'

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/home' },
    { path: '/sign_in', component: SignInPage },
    {
        path: '/home', component: Home,
        beforeEnter: async (to, _from, next) => {
            await ajax.get<UserTokens>('/me').catch(() => {
                next('/sign_in?return_to=' + to.path)
            })
            next()
        }
    },
]