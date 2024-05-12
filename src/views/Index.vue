<script setup>
import { ref, onMounted } from 'vue'
import { userGet } from '@/plugins/http'
import PageWrapper from '@/components/PageWrapper.vue'
import BaseCard from '@/components/BaseCard.vue'
import { Icon } from '@iconify/vue'
import QuiclStatisticsCard from '@/components/QuiclStatisticsCard.vue'

const totalStudents = ref(0)
const totalBooks = ref(0)
const totalBorrowedBooks = ref(0)
const totalReturnedBooks = ref(0)
const recentBorrowedBooks = ref([])
const recentReturnedBooks = ref([])

const fetchDashboardData = async () => {
    try {
        const response = await userGet('/admin-dashboard')
        const {
            totalStudents: students,
            totalBooks: books,
            totalBorrowedBooks: borrowedBooks,
            totalReturnedBooks: returnedBooks,
        } = response.data
        totalStudents.value = students
        totalBooks.value = books
        totalBorrowedBooks.value = borrowedBooks
        totalReturnedBooks.value = returnedBooks
    } catch (error) {
        console.error('Error fetching dashboard data:', error)
    }
}

const fetchRecentBorrowedBooks = async () => {
    try {
        const response = await userGet('/admin-view-borrowed-books')
        recentBorrowedBooks.value = response.data.borrowedBooks.slice(0, 3)
    } catch (error) {
        console.error('Error fetching recent borrowed books:', error)
    }
}

const fetchRecentReturnedBooks = async () => {
    try {
        const response = await userGet('/admin-view-returned-books')
        recentReturnedBooks.value = response.data.returnedBooks.slice(0, 3)
    } catch (error) {
        console.error('Error fetching recent returned books:', error)
    }
}

onMounted(() => {
    fetchDashboardData()
    fetchRecentBorrowedBooks()
    fetchRecentReturnedBooks()
})
</script>
<template>
    <PageWrapper>
        <template #header>
            <div
                class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            ></div>
        </template>
        <!-- Statistics section -->
        <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <h2 class="sr-only">Quick statistics</h2>
            <QuiclStatisticsCard
                title="Total Students"
                :result="totalStudents"
            />
            <QuiclStatisticsCard title="Total Books" :result="totalBooks" />
            <QuiclStatisticsCard
                title="Total Borrowed Books"
                :result="totalBorrowedBooks"
            />
            <QuiclStatisticsCard
                title="Total Returned Books"
                :result="totalReturnedBooks"
            />
        </section>
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
            <!-- Recent transactions -->
            <BaseCard title="Recently Borrowed Books">
                <div
                    v-for="book in recentBorrowedBooks"
                    :key="book.borrowed_book_id"
                    class="mt-4 flex items-center justify-between"
                >
                    <div class="flex items-center gap-2">
                        <Icon
                            icon="mdi:minus-circle-outline"
                            aria-hidden="true"
                            class="w-6 h-6 text-red-500"
                        />
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                {{ book.book_name }}
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                Borrowed by {{ book.borrower_name }} on
                                {{ book.borrowed_date }}
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-red-500"
                        >Due: {{ book.return_date }}</span
                    >
                </div>
            </BaseCard>

            <BaseCard title="Recently Returned Books">
                <div
                    v-for="book in recentReturnedBooks"
                    :key="book.borrowed_book_id"
                    class="mt-4 flex items-center justify-between"
                >
                    <div class="flex items-center gap-2">
                        <Icon
                            icon="mdi:plus-circle-outline"
                            aria-hidden="true"
                            class="w-6 h-6 text-green-500"
                        />
                        <div>
                            <h5
                                class="text-xs text-gray-600 dark:text-gray-300"
                            >
                                {{ book.book_name }}
                            </h5>
                            <p class="text-xs text-gray-400 dark:text-gray-500">
                                Returned by {{ book.borrower_name }} on
                                {{ book.return_date }}
                            </p>
                        </div>
                    </div>

                    <span class="text-base font-medium text-green-500"
                        >Returned</span
                    >
                </div>
            </BaseCard>
        </div>
        <!-- Latest users & transaction section -->
    </PageWrapper>
</template>
