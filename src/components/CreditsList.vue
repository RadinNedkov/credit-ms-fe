<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { NODEJS_ENDPOINT } from '../config/api.ts'
import TableTr from './includes/TableTr.vue'

const credits = ref([])
const error = ref(null)

const getCredits = async () => {
  const response = await axios.get(`${NODEJS_ENDPOINT}/credits`)
  if (response.data.count > 0) {
    credits.value = response.data.credits
  } else {
    error.value = 'Error getting credits list.'
  }
}

onMounted(() => {
    getCredits()
})
</script>
<template>
  <div class="mt-4 bg-white min-h-screen">
    <div class="overflow-x-auto relative mb-2 w-full md:w-2/4 mx-auto">
        <table class="my-6 w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="py-3 px-1 md:px-6">Customer Name</th>
                    <th scope="col" class="py-3 px-1 md:px-6">Amount</th>
                    <th scope="col" class="py-3 px-1 md:px-6">Period</th>
                    <th scope="col" class="py-3 px-1 md:px-6 flex justify-end">Installment</th>
                </tr>
            </thead>
            <tbody>
                <TableTr v-for="(credit, index) in credits" :item="credit" :key="index" />
            </tbody>
        </table>
    </div>
  </div>
</template>