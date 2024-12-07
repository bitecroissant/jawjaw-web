import { createRouter } from 'vue-router'
import { history } from '../shared/history'
import { routes } from './routes'

export const router = createRouter({
    history,
    routes,
})