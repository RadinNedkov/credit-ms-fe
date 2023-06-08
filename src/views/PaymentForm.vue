<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { NODEJS_ENDPOINT } from '../config/api.ts'

const credits = ref([])
const selectedCredit = ref('')
const paymentAmount = ref(null)
const message = ref('')

const getCredits = () => {
  axios.get(`${NODEJS_ENDPOINT}/credits`)
  .then(response => {
    if (response.data.count > 0) {
    credits.value = response.data.credits
    }
  })
  .catch(error => {
    error.value = error
  })
}

const makePayment = () => {
  axios.patch(`${NODEJS_ENDPOINT}/credits/update/${selectedCredit.value}`, {
    payment: paymentAmount.value
  })
  .then(res => {
    message.value = `Your total due is ${res.data.credit.totalDue} BGN now. ${res.data.message}`
  })
  .catch(error => {
    message.value = error.response.data.error
  })
}

onMounted(() => {
    getCredits()
})
</script>
<template>
  <div class="container mx-auto px-1 md:px-4 text-center justify-center">
    <div class="mt-4 bg-white min-h-screen">
      <div class="py-6">
        <h1 class="text-xl font-medium mb-4">Make credit payment form</h1>
        <div class="flex justify-center mb-2">
          <label class="md:w-1/12 mr-1 text-left" for="selectedCredit">Select Credit: </label>
          <select class="md:w-1/6 dark:text-white" v-model="selectedCredit" name="selectedCredit">
            <option v-for="(credit, index) in credits" :key="index" :value="credit._id">{{ credit.customerName + ' - ' + credit._id }}</option>
          </select>
        </div>
        <div class="flex justify-center mb-2">
          <label class="md:w-1/12 mr-1 text-left" for="paymentAmount">Amount: </label>
          <input class="md:w-1/6 dark:text-white" v-model.number="paymentAmount" type="number" name="paymentAmount">
        </div>
        <button type="button" @click="makePayment" class="mb-2 text-white bg-indigo-600 max-w-200px py-1 px-5 mx-auto rounded-md font-medium font-bold justify-center hover:bg-indigo-400 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400">SEND</button>
        <div>{{ message }}</div>
      </div>
    </div>
  </div>
</template>