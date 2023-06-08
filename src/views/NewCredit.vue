<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { NODEJS_ENDPOINT } from '../config/api.ts'

const customerName = ref('')
const amount = ref(null)
const period = ref(null)
const message = ref('')

const addCredit = () => {
  axios.post(`${NODEJS_ENDPOINT}/credits`, {
    customerName: customerName.value,
    amount: amount.value,
    period: period.value
  })
  .then(res => {
    message.value = res.data
  })
  .catch(error => {
    message.value = error.response.data.error
  })
}
</script>
<template>
  <div class="container mx-auto px-1 md:px-4 text-center justify-center">
    <div class="mt-4 bg-white min-h-screen">
      <div class="py-6">
        <h1 class="text-xl font-medium mb-4">New credit form</h1>
        <div class="flex justify-center mb-2">
          <label class="md:w-1/12 mr-1 text-left" for="customerName">Customer Name: </label>
          <input class="md:w-1/6 dark:text-white" v-model="customerName" type="text" name="customerName">
        </div>
        <div class="flex justify-center mb-2">
          <label class="md:w-1/12 mr-1 text-left" for="amount">Credit Amount: </label>
          <input class="md:w-1/6 dark:text-white" v-model.number="amount" type="number" name="amount">
        </div>
        <div class="flex justify-center mb-2">
          <label class="md:w-1/12 mr-1 text-left" for="period">Period in months: </label>
          <input class="md:w-1/6 dark:text-white" v-model.number="period" type="number" name="period">
        </div>
        <button type="button" @click="addCredit" class="mb-2 text-white bg-indigo-600 max-w-200px py-1 px-5 mx-auto rounded-md font-medium font-bold justify-center hover:bg-indigo-400 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400">CREATE</button>
        <div>{{ message }}</div>
      </div>
      
    </div>
  </div>
</template>