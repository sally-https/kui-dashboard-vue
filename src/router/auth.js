import router from '@/router'

const ACCESS_TOKEN_KEY = 'accessToken'
const ROLE_KEY = 'role'

export const userRole = {
    GUEST: 'guest',
    ADMIN: 'admin',
}

export const isAuthenticated = () => {
    return !!localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const getRole = () => {
    return localStorage.getItem(ROLE_KEY) || userRole.GUEST
}

export const isAdmin = () => {
    return getRole() === userRole.ADMIN
}

// In @/router/auth.js
export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
    localStorage.removeItem(ROLE_KEY)
    router.push({ name: 'Login' }).catch(() => {})
}
