<script setup>
import { ref, onMounted } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import PageWrapper from '@/components/PageWrapper.vue'
import { userGet } from '@/plugins/http'
import Swal from 'sweetalert2'

const columnDefs = ref([
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'borrower_name', headerName: 'Borrower Name', width: 200 },
    { field: 'student_id', headerName: 'Student ID', width: 150 },
    { field: 'book_name', headerName: 'Book Name', width: 200 },
    { field: 'borrowed_date', headerName: 'Borrowed Date', width: 150 },
    { field: 'return_date', headerName: 'Return Date', width: 150 },
    {
        field: 'return_code',
        headerName: 'Return Code',
        width: 150,
        cellRenderer: (params) => {
            return `<div class="return-code" title="Click to copy">${params.value}</div>`
        },
        onCellClicked: (params) => {
            copyToClipboard(params.value)
            Swal.fire('Copied', 'Return code copied to clipboard', 'success')
        },
    },
])

const rowData = ref([])

const fetchBorrowedBooks = async () => {
    try {
        const response = await userGet('/admin-view-borrowed-books')
        if (response.status === 200) {
            rowData.value = response.data.borrowedBooks
        } else {
            throw new Error(
                `Failed to fetch borrowed books: ${response.status}`
            )
        }
    } catch (error) {
        console.error(error)
        Swal.fire('Error', 'Failed to fetch borrowed books', 'error')
    }
}
const copyToClipboard = (text) => {
    const el = document.createElement('textarea')
    el.value = text
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}
onMounted(() => {
    fetchBorrowedBooks()
})
</script>

<template>
    <PageWrapper title="Borrowed Books">
        <div style="height: calc(100vh - 200px)">
            <ag-grid-vue
                class="ag-theme-alpine"
                style="padding: 20px; width: 100%; height: 100%"
                :columnDefs="columnDefs"
                :rowData="rowData"
            >
            </ag-grid-vue>
        </div>
    </PageWrapper>
</template>
