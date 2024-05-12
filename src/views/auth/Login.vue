<script setup>
import { reactive } from 'vue'
import InputIconWrapper from '@/components/InputIconWrapper.vue'
import Label from '@/components/Label.vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import { post } from '@/plugins/http'
import { successToast, errorToast } from '@/toast/index'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginForm = reactive({
    email: '',
    password: '',
    remember: false,
    processing: false,
})

const login = async () => {
    if (loginForm.email && loginForm.password) {
        loginForm.processing = true

        try {
            const response = await post('/admin-login', {
                email: loginForm.email,
                password: loginForm.password,
                remember: loginForm.remember,
            })

            if (response.status === 200) {
                // Save the token and admin data to local storage
                localStorage.setItem('accessToken', response.data.token)
                localStorage.setItem('role', response.data.role)
                localStorage.setItem(
                    'adminData',
                    JSON.stringify(response.data.admin)
                )
                successToast({
                    title: 'Admin Login Successful',
                    text: 'Welcome back!',
                })
                router.push({ name: 'Dashboard' })
            } else {
                if (response.data.errors) {
                    // Extract the error message from the response data
                    const errorMessage =
                        response.data.message || 'Invalid credentials'
                    const errorDetails = Object.values(response.data.errors)
                        .flat()
                        .join(', ')
                    errorToast({
                        title: 'Login Failed',
                        text: `${errorMessage}: ${errorDetails}`,
                    })
                } else {
                    errorToast({
                        title: 'Login Failed',
                        text: response.data.message,
                    })
                }
            }
            // Reset form fields
            loginForm.email = ''
            loginForm.password = ''
            loginForm.remember = false
        } catch (error) {
            // Handle error
            console.error(error)

            // Show error toast
            errorToast({
                title: 'Login Failed',
                text: 'The Problem is not from you! Please try again.',
            })
        } finally {
            loginForm.processing = false
        }
    }
}
</script>

<template>
    <form @submit.prevent="login">
        <div class="grid gap-6">
            <!-- Email input -->
            <div class="space-y-2">
                <Label for="email" value="Email" />

                <InputIconWrapper icon="mdi:email-outline">
                    <Input
                        withIcon
                        id="email"
                        type="email"
                        class="block w-full"
                        placeholder="Email"
                        v-model="loginForm.email"
                        required
                        autofocus
                        autocomplete="username"
                    />
                </InputIconWrapper>
            </div>

            <!-- Password input -->
            <div class="space-y-2">
                <Label for="password" value="Password" />

                <InputIconWrapper icon="mdi:lock-outline">
                    <Input
                        withIcon
                        id="password"
                        type="password"
                        class="block w-full"
                        placeholder="Password"
                        v-model="loginForm.password"
                        required
                        autocomplete="current-password"
                    />
                </InputIconWrapper>
            </div>

            <!-- Login button -->
            <div>
                <Button
                    type="submit"
                    class="justify-center w-full gap-2"
                    :disabled="loginForm.processing"
                    left-icon="mdi:login"
                >
                    <span>Log in</span>
                </Button>
            </div>

            <!-- Register link -->
        </div>
    </form>
</template>
