<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {},
    }
})
</script>
<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="py-4 px-1 md:px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div class="flex items-center">
                <span class="pl-2">{{ item.customerName }}</span>
            </div>
        </th>
        <td class="py-4 px-1 md:px-6">
            {{ item.amount }} BGN
        </td>
        <td class="py-4 px-1 md:px-6">
            <span>{{ item.period }} months</span>
        </td>
        <td class="py-4 px-1 md:px-6 text-right">
            <div class="flex justify-end">
                <span>{{ Math.round(item.installment) }} BGN</span>
            </div>
        </td>
    </tr>
</template>