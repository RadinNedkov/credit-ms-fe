import { createApp } from 'vue'
import './style.css'
import FrontendLayout from './layouts/DefaultLayout.vue'
import { router } from './ts/CreateRoute.js'

createApp(FrontendLayout).use(router).mount('#app')
