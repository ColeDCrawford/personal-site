import VueRouter from 'vue-router';
// import store from '@/common/store';

const routes = [
    {
        path: '/',
        component: () => import('@/components/pages/HomePage')
    },
    {
        path: '/project/:slug',
        component: () => import('@/components/pages/ProjectPage'),
        props: true,
        name: 'Project'
    },
    {
        path: '/projects',
        component: () => import('@/components/pages/ProjectsPage'),
    }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

export default router;