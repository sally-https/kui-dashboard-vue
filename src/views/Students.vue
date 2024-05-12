<script setup>
import { ref, onMounted } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import PageWrapper from '@/components/PageWrapper.vue'
import { userGet, userPut, userDelete } from '@/plugins/http'
import Swal from 'sweetalert2'

const columnDefs = ref([
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'student_id', headerName: 'Student ID', width: 200 },
    { field: 'email', headerName: 'Student Email', width: 200 },
    { field: 'created_at', headerName: 'Created At', width: 200 },
    {
        field: 'borrowed_books_count',
        headerName: 'Total Borrowed Books',
        width: 200,
    },
])

const rowData = ref([])

const fetchStudents = async () => {
    try {
        const response = await userGet('/admin-view-students')
        if (response.status === 200) {
            rowData.value = response.data.students
        } else {
            throw new Error(`Failed to fetch students: ${response.status}`)
        }
    } catch (error) {
        console.error(error)
        Swal.fire('Error', 'Failed to fetch students', 'error')
    }
}

onMounted(() => {
    fetchStudents()
})
</script>
<template>
    <PageWrapper title="Students">
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
