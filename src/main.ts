import { createApp } from 'vue'
// import { createMemoryHistory, createRouter } from 'vue-router'
import './style.scss'
import { App } from './App'
// import { SignInPage } from './views/SginInPage'
// import { Home } from './views/Home'


// const routes = [
//     { path: '/sign_in', component: SignInPage },
//     { path: '/home', component: Home },
// ]
// const router = createRouter({
//     history: createMemoryHistory(),
//     routes,
//   })


setTimeout(() => {
    createApp(App).mount('#app')
}, 1600)
