<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(true)
</script>
<template>
  <header class="bg-white">
    <nav class="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5 flex items-center">
          <img class="h-8 w-auto mr-1" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Credit Management System" />
          <span class="font-medium">Credit Management System</span>
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 font-semibold inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span>-menu-</span>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link to="/" class="text-lg font-semibold leading-6 text-gray-900">Credits</router-link>
        <router-link to="/new-credit" class="text-lg font-semibold leading-6 text-gray-900">New Credit</router-link>
        <router-link to="/make-payment" class="text-lg font-semibold leading-6 text-gray-900">Make Payment</router-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-lg font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <div class="lg:hidden" @click="mobileMenuOpen = !mobileMenuOpen" v-if="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Credit Management System</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </router-link>
          <button type="button" class="-m-2.5 font-semibold rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span>-close-</span>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link to="/" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Credits</router-link>
              <router-link to="/new-credit" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">New Credit</router-link>
              <router-link to="/make-payment" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Make Payment</router-link>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
