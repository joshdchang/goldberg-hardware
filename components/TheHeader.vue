<script setup>
  const open = true

  import { Directus } from '@directus/sdk'
  const directus = new Directus('https://directus.ihsyearbook.com')
  // const home = await directus.items('home').readOne(1)

</script>

<template>
  <div class="p-4 sm:p-3 sm:px-7 md:px-9 lg:px-12 bg-white sm:sticky sm:top-0 z-50 sm:shadow-md">
    <div class="max-w-7xl mx-auto grid sm:grid-flow-col justify-center sm:justify-between items-center gap-4">
      <div class="grid sm:grid-flow-col gap-2 sm:gap-4 md:text-lg text-center">
        <div class="text-gray-700" >Monday - Saturday, 7:30 AM - 5:30 PM</div>
        <div v-if="open" class="text-green-600 font-bold uppercase">Open now</div>
        <div v-else class="text-red-500 font-bold uppercase">Closed now</div>
      </div>
      <Button class="p-button-sm" label="(914) 631-1817" icon="pi pi-phone" iconPos="left" />
    </div>
  </div>
</template>
