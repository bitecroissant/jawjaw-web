import { createApp } from 'vue'
import './style.scss'
import { App } from './App'
import { router } from './config/router'


const app = createApp(App)
app.use(router)
setTimeout(() => {
    app.mount('#app')
}, 1600)
