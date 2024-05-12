import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/router/auth'
import NProgress from 'nprogress'
import { sidebarState } from '@/composables'
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DashboardLayout.vue'),
        meta: { requiresAuth: true },
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: () => import('@/views/Index.vue'),
            },
            {
                path: '/pages/blank',
                name: 'Blank',
                component: () => import('@/views/pages/Blank.vue'),
            },
            {
                path: '/students',
                name: 'Students',
                component: () => import('@/views/Students.vue'),
            },
            {
                path: '/books',
                name: 'Books',
                component: () => import('@/views/Books.vue'),
            },
            {
                path: '/borrowedbooks',
                name: 'BorrowedBooks',
                component: () => import('@/views/BorrowedBooks.vue'),
            },
            {
                path: '/returnedbooks',
                name: 'ReturnedBooks',
                component: () => import('@/views/ReturnedBooks.vue'),
            },
        ],
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('@/layouts/AuthenticationLayout.vue'),
        meta: { isGuest: true },
        children: [
            {
                path: '/auth/login',
                name: 'Login',
                component: () => import('@/views/auth/Login.vue'),
            },
            {
                path: '/auth/register',
                name: 'Register',
                component: () => import('@/views/auth/Register.vue'),
            },
            {
                path: '/auth/forgot-password',
                name: 'ForgotPassword',
                component: () => import('@/views/auth/ForgotPassword.vue'),
            },
            {
                path: '/auth/reset-password',
                name: 'ResetPassword',
                component: () => import('@/views/auth/ResetPassword.vue'),
            },
            {
                path: '/auth/confirm-password',
                name: 'ConfirmPassword',
                component: () => import('@/views/auth/ConfirmPassword.vue'),
            },
            {
                path: '/auth/verify-email',
                name: 'VerifyEmail',
                component: () => import('@/views/auth/VerifyEmail.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/Index.vue'),
        meta: { requiresAuth: true, requiresAdmin: true },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const isLoggedIn = isAuthenticated()

    if (to.meta.requiresAuth && !isLoggedIn) {
        next({ name: 'Login' })
    } else if (to.meta.isGuest && isLoggedIn) {
        next({ name: 'Dashboard' })
    } else if (to.path === '/auth/login' && isLoggedIn) {
        // Redirect authenticated users trying to access the login page
        next({ name: 'Dashboard' })
    } else {
        next()
    }
})
router.afterEach((to) => {
    if (window.innerWidth <= 1024) {
        sidebarState.isOpen = false
    }

    // Update the URL to reflect the correct route
    window.history.replaceState(null, '', to.fullPath)

    NProgress.done()
})

export default router
