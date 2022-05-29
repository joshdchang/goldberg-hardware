<script setup>

  // const home = await useItem('home')
  const open = true

  const scroll = useScroll()
  const title = ref(null)
  const height = ref(0)

  onMounted(() => {
    height.value = title.value.clientHeight
  })

  const tailwind = useTailwind()

  const messageEnabled = true
  const messageType = 'warn'
  const message = 'Goldberg Hardware is closed today due to Memorial Day'
</script>

<template>

  <!-- hover header -->
  <div class="p-4 sm:p-3 sm:px-7 md:px-9 lg:px-12 bg-white sm:sticky sm:top-0 z-50 sm:[box-shadow:#10123020_0_0_1rem_0]">
    <div class="max-w-7xl w-full mx-auto grid sm:grid-flow-col justify-center sm:justify-between items-center gap-4 sm:gap-6 md:gap-10 lg">

      <!-- scrolled down -->
      <h1 v-if="scroll > height && tailwind['sm']" class="font-serif font-bold text-xl sm:text-2xl text-primary">
        Goldberg Hardware
      </h1>

      <!-- hours -->
      <div v-if="!tailwind['sm'] || scroll <= height || tailwind['md']"
        class="grid sm:grid-flow-col gap-2 sm:gap-4 md:text-lg text-center">
        <div class="text-gray-700">
          Monday - Saturday, 7:30 AM - 5:30 PM
        </div>
        <span v-show="!tailwind['sm'] || scroll <= height || tailwind['lg']">
          <div v-if="open" class="text-green-600 font-bold uppercase">
            Open now
          </div>
          <div v-else class="text-red-500 font-bold uppercase">
            Closed now
          </div>
        </span>
      </div>

      <!-- phone -->
      <Button class="p-button-sm" label="(914) 631-1817" icon="pi pi-phone" iconPos="left" />
      
    </div>
    <Message v-if="messageEnabled" :severity="messageType" >
      {{ message }}
    </Message>
  </div>

  <!-- title section -->
  <div ref="title" class="p-6 sm:p-8 md:p-10 lg:p-12 flex justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
    <img src="/icon.png" class="w-16 sm:w-20 md:w-24 lg:w-28">
    <div class="grid gap-1 sm:gap-2 md:gap-3 lg:gap-4">
      <h1 class="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
        Goldberg Hardware
      </h1>
      <p class="text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
        63 Main Street, Tarrytown, NY
      </p>
    </div>
  </div>

</template>