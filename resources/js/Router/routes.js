const routes = [
    {
        path: '/m/home',
        component: () => import('../Pages/Home.vue'),
        name: 'home'
    },
    {
        path: '/m/login',
        component: () => import('../Pages/Login.vue')
    }
]

export default routes