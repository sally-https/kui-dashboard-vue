<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useFullscreen } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import {
    handleScroll,
    isDark,
    scrolling,
    toggleDarkMode,
    sidebarState,
} from '@/composables'
import Button from '@/components/Button.vue'
import Logo from '@/components/Logo.vue'
import Dropdown from '@/components/Dropdown.vue'
import userAvatar from '@/assets/images/avatar.jpg'
import { useRouter } from 'vue-router'

const router = useRouter()
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen()
const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('adminData')
    localStorage.removeItem('role')
    router.push({ name: 'Login' })
}
onMounted(() => {
    document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <nav
        aria-label="secondary"
        :class="[
            'sticky top-0 z-10 px-6 py-4 bg-white flex items-center justify-between transition-transform duration-500 dark:bg-dark-eval-1',
            {
                '-translate-y-full': scrolling.down,
                'translate-y-0': scrolling.up,
            },
        ]"
    >
        <div class="flex items-center gap-2">
            <Button
                icon-only
                variant="secondary"
                @click="toggleDarkMode"
                v-slot="{ iconSizeClasses }"
                class="md:hidden"
                srText="Toggle dark mode"
            >
                <Icon
                    icon="mdi:weather-night"
                    v-show="!isDark"
                    aria-hidden="true"
                    :class="iconSizeClasses"
                />
                <Icon
                    icon="mdi:white-balance-sunny"
                    v-show="isDark"
                    aria-hidden="true"
                    :class="iconSizeClasses"
                />
            </Button>
        </div>

        <div class="flex items-center gap-2">
            <Button
                iconOnly
                variant="secondary"
                @click="toggleDarkMode()"
                v-slot="{ iconSizeClasses }"
                class="hidden md:inline-flex"
                srText="Toggle dark mode"
            >
                <Icon
                    icon="mdi:weather-night"
                    v-show="!isDark"
                    aria-hidden="true"
                    :class="iconSizeClasses"
                />
                <Icon
                    icon="mdi:white-balance-sunny"
                    v-show="isDark"
                    aria-hidden="true"
                    :class="iconSizeClasses"
                />
            </Button>

            <Button
                iconOnly
                variant="secondary"
                @click="toggleFullScreen"
                v-slot="{ iconSizeClasses }"
                class="hidden md:inline-flex"
                srText="Toggle dark mode"
            >
                <Icon
                    icon="mdi:arrow-expand-all"
                    v-show="!isFullscreen"
                    aria-hidden="true"
                    :class="iconSizeClasses"
                />
                <Icon
                    icon="mdi:arrow-collapse-all"
                    v-show="isFullscreen"
                    aria-hidden="true"
                    :class="iconSizeClasses"
                />
            </Button>

            <!-- Dropdwon -->
            <Dropdown align="right" width="48">
                <template #trigger>
                    <button
                        class="flex text-sm transition border-2 border-transparent rounded-md focus:outline-none focus:ring focus:ring-purple-500 focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark-eval-1"
                    >
                        <img
                            class="object-cover w-8 h-8 rounded-md"
                            :src="userAvatar"
                            alt="User Name"
                        />
                    </button>
                </template>
                <template #content>
                    <button
                        @click="logout"
                        class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out dark:text-white dark:hover:bg-dark-eval-2"
                    >
                        Log Out
                    </button>
                </template>
            </Dropdown>
        </div>
    </nav>

    <!-- Mobile bottom bar -->
    <div
        :class="[
            'fixed inset-x-0 bottom-0 flex items-center justify-between px-4 py-4 sm:px-6 transition-transform duration-500 bg-white md:hidden dark:bg-dark-eval-1',
            {
                'translate-y-full': scrolling.down,
                'translate-y-0': scrolling.up,
            },
        ]"
    >
        <Button
            icon="mdi:magnify"
            iconOnly
            variant="secondary"
            srText="Search"
        />

        <router-link :to="{ name: 'Dashboard' }">
            <Logo class="w-10 h-10" />
            <span class="sr-only">K UI</span>
        </router-link>

        <Button
            iconOnly
            variant="secondary"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            v-slot="{ iconSizeClasses }"
            class="md:hidden"
            srText="toggle menu"
        >
            <Icon
                icon="mdi:menu"
                v-show="!sidebarState.isOpen"
                aria-hidden="true"
                :class="iconSizeClasses"
            />
            <Icon
                icon="mdi:window-close"
                v-show="sidebarState.isOpen"
                aria-hidden="true"
                :class="iconSizeClasses"
            />
        </Button>
    </div>
</template>
