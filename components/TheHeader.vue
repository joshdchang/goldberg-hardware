<script setup>

  const scroll = useScroll()
  const title = ref(null)
  const height = ref(0)
  const tailwind = useTailwind()

  onMounted(() => {
    height.value = title.value.clientHeight
  })
  
  const settings = await useItem('settings')

  const toTimeNum = timeStr => (new Date(timeStr.split(' ')[0] + ' 1/1/1970')).getTime()
  
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const day = days[(new Date).getDay()]
  const openToday = settings[day]
  const currentTime = toTimeNum((new Date()).toTimeString())
  const openTime = toTimeNum(settings[day + '_open'])
  const closeTime = toTimeNum(settings[day + '_close'])
  const hasOpened = currentTime > openTime
  const hasClosed = currentTime > closeTime
  const open = openToday && hasOpened && !hasClosed
</script>

<template>

  <!-- hover header -->
  <div class="p-4 sm:p-3 sm:px-7 md:px-9 lg:px-12 bg-white sm:sticky sm:top-0 z-50 sm:[box-shadow:#10123020_0_0_1rem_0]">
    <div class="max-w-7xl w-full mx-auto grid sm:grid-flow-col justify-center sm:justify-between items-center gap-4 sm:gap-6 md:gap-10 lg">

      <!-- scrolled down -->
      <h1 v-if="scroll > height && tailwind['sm']" class="font-serif font-bold text-xl sm:text-2xl text-primary">
        {{ settings.store_name }}
      </h1>

      <!-- hours -->
      <div v-if="!tailwind['sm'] || scroll <= height || tailwind['md']"
        class="grid sm:grid-flow-col gap-2 sm:gap-4 md:text-lg text-center">
        <div class="text-gray-700">
          {{ settings.hours_description }}
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
      <a :href="'tel:' + settings.phone_number.replace(/\D/g, '')">
        <Button class="p-button-sm w-full" :label="settings.phone_number" icon="pi pi-phone" iconPos="left" />
      </a>
      
    </div>
    <Message v-if="settings.alert_enabled" :severity="settings.type" >
      {{ settings.alert_text }}
    </Message>
  </div>

  <!-- title section -->
  <div ref="title" class="p-6 sm:p-8 md:p-10 lg:p-12 flex justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
    <TheImage :uuid="settings.icon" class="w-16 sm:w-20 md:w-24 lg:w-28" />
    <div class="grid gap-1 sm:gap-2 md:gap-3 lg:gap-4">
      <h1 class="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
        {{ settings.store_name }}
      </h1>
      <p class="text-gray-600 sm:text-lg md:text-xl lg:text-2xl">
        {{ settings.address }}
      </p>
    </div>
  </div>

</template>