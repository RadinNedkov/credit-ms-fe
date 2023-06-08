import { createRouter, createWebHistory } from 'vue-router'
import { routes as _routes } from '../router/index.ts'

const router = createRouter({
    routes: _routes,
    history: createWebHistory()
})

export { router }
