import { Home } from '../views/Home'
import { SignInPage } from '../views/SginInPage'

export const routes = [
    { path: '/', redirect: '/home' },
    { path: '/sign_in', component: SignInPage },
    { path: '/home', component: Home },
]