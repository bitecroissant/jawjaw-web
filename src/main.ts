import { createApp } from 'vue'
import { App } from './App'
import { router } from './config/router'
import 'virtual:uno.css'
// @ts-ignore
import 'virtual:svgsprites'
import './global.scss'
// import vhCheck from "vh-check";

// vhCheck()
const app = createApp(App)
app.use(router)
app.mount('#app')
