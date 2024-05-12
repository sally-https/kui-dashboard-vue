<script setup>
import PageWrapper from '@/components/PageWrapper.vue'
import { userPost, userGet, userDelete } from '@/plugins/http'
import Swal from 'sweetalert2'
import { onMounted, ref, computed } from 'vue'

const addBook = async () => {
    const { value: formValues } = await Swal.fire({
        title: 'Add Book',
        html:
            '<div style="display: flex; flex-direction: column; gap: 20px;">' +
            '<div style="display: flex; flex-direction: column; gap: 8px;">' +
            '<label for="swal-input1" style="font-weight: bold; color: #333;">Title</label>' +
            '<input id="swal-input1" class="swal2-input" placeholder="Enter book title" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px;">' +
            '</div>' +
            '<div style="display: flex; flex-direction: column; gap: 8px;">' +
            '<label for="swal-input2" style="font-weight: bold; color: #333;">Author</label>' +
            '<input id="swal-input2" class="swal2-input" placeholder="Enter author name" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px;">' +
            '</div>' +
            '<div style="display: flex; flex-direction: column; gap: 8px;">' +
            '<label for="swal-input3" style="font-weight: bold; color: #333;">Quantity</label>' +
            '<input id="swal-input3" class="swal2-input" placeholder="Enter quantity" type="number" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px;">' +
            '</div>' +
            '<div style="display: flex; flex-direction: column; gap: 8px;">' +
            '<label for="swal-input4" style="font-weight: bold; color: #333;">Book Image URL</label>' +
            '<input id="swal-input4" class="swal2-input" placeholder="Enter image URL" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px;">' +
            '</div>' +
            '</div>',
        focusConfirm: false,
        preConfirm: () => {
            return {
                title: document.getElementById('swal-input1').value,
                author: document.getElementById('swal-input2').value,
                quantity: parseInt(
                    document.getElementById('swal-input3').value
                ),
                book_image_url: document.getElementById('swal-input4').value,
            }
        },
    })

    if (formValues) {
        try {
            const response = await userPost('/admin-add-book', formValues)
            console.log(response.data)
            if (response.status === 201) {
                fetchBooks()
                Swal.fire('Success', 'Book added successfully', 'success')
            } else {
                Swal.fire('Error', 'Failed to add book', 'error')
            }
        } catch (error) {
            console.error(error)
            Swal.fire('Error', 'Failed to add book', 'error')
        }
    }
}

const books = ref([])
const searchQuery = ref('')

const fetchBooks = async () => {
    try {
        const response = await userGet('/admin-view-books')
        if (response.status === 200) {
            books.value = response.data.books
        } else {
            throw new Error(`Failed to fetch books: ${response.status}`)
        }
    } catch (error) {
        console.error(error)
        Swal.fire('Error', error.message, 'error')
    }
}

const filteredBooks = computed(() => {
    if (searchQuery.value.trim() === '') {
        return books.value
    } else {
        const query = searchQuery.value.toLowerCase()
        return books.value.filter(
            (book) =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
        )
    }
})

const deleteBook = async (bookId) => {
    try {
        const response = await userDelete(`/books/${bookId}`)
        if (response.status === 200) {
            fetchBooks()
            Swal.fire('Success', 'Book deleted successfully', 'success')
        } else {
            Swal.fire('Error', 'Failed to delete book', 'error')
        }
    } catch (error) {
        console.error(error)
        Swal.fire('Error', 'Failed to delete book', 'error')
    }
}

const confirmDeleteBook = (bookId) => {
    Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to delist this book?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delist it!',
    }).then((result) => {
        if (result.isConfirmed) {
            deleteBook(bookId)
        }
    })
}

onMounted(() => {
    fetchBooks()
})
</script>

<template>
    <PageWrapper title="Books">
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by book name or author"
            class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
            class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            @click="addBook"
        >
            Add Book
        </button>
        <div class="mb-4 mt-4"></div>
        <div class="wrapper-button w-full box-border flex flex-wrap gap-4">
            <div
                v-for="book in filteredBooks"
                :key="book.id"
                class="card bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-64"
            >
                <a href="#">
                    <img
                        class="rounded-t-lg"
                        :src="book.book_image_url"
                        alt=""
                    />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5
                            class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            {{ book.title }}
                        </h5>
                    </a>
                    <p
                        class="mb-2 font-normal text-gray-700 dark:text-gray-400"
                    >
                        by {{ book.author }}
                    </p>
                    <div class="flex justify-between items-center">
                        <span
                            class="text-sm font-bold text-gray-900 dark:text-white"
                        >
                            {{ book.quantity }} available
                        </span>
                        <button
                            class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            @click="confirmDeleteBook(book.id)"
                        >
                            Delist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </PageWrapper>
</template>
