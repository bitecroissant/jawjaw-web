import { RouteRecordRaw } from 'vue-router'
import { Home } from '../views/Home'
import { SignInPage } from '../views/SginInPage'
import { ajax } from '../lib/ajax'

export const routes: RouteRecordRaw[] = [
    { path: '/', redirect: '/home' },
    { path: '/sign_in', component: SignInPage },
    {
        path: '/home', component: Home,
        beforeEnter: async (_to, _from, next) => {
            const _token = await ajax.get<UserTokens>('/me')
            console.log(_token)
            next()
        }
    },
]