<script setup>
import { useRouter } from 'vue-router'
import PerfrectScrollbar from '@/components/PerfectScrollbar.vue'
import SidebarLink from '@/components/sidebar/SidebarLink.vue'

const isCurrentRoute = (routeName) => {
    return useRouter().currentRoute.value.name == routeName
}

const isCurrentPath = (path) => {
    return useRouter().currentRoute.value.path.startsWith(path)
}
</script>

<template>
    <PerfrectScrollbar
        tagname="nav"
        aria-label="main"
        class="relative flex flex-col flex-1 max-h-full gap-4 px-3"
    >
        <SidebarLink
            title="Dashboard"
            :to="{ name: 'Dashboard' }"
            :active="isCurrentRoute('Dashboard')"
            icon="mdi:view-dashboard"
        />

        <SidebarLink
            title="Students"
            :to="{ name: 'Students' }"
            :active="isCurrentRoute('Students')"
            icon="mdi:note-outline"
        >
        </SidebarLink>
        <SidebarLink
            title="Books"
            :to="{ name: 'Books' }"
            :active="isCurrentRoute('Books')"
            icon="mdi:note-outline"
        >
        </SidebarLink>
        <SidebarLink
            title="Borrowed Books"
            :to="{ name: 'BorrowedBooks' }"
            :active="isCurrentRoute('BorrowedBooks')"
            icon="mdi:note-outline"
        >
        </SidebarLink>
        <SidebarLink
            title="Returned Books"
            :to="{ name: 'ReturnedBooks' }"
            :active="isCurrentRoute('ReturnedBooks')"
            icon="mdi:note-outline"
        >
        </SidebarLink>
    </PerfrectScrollbar>
</template>
