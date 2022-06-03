<script setup>

  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'

  const state = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const rules = {
    name: { required },
    subject: { required },
    email: { required, email },
    message: { required }
  }

  const v$ = useVuelidate(rules, state)

  const submitted = ref(false)
  const sent = ref(false)
  const success = ref(false)

  const formUrl = 'https://script.google.com/macros/s/AKfycbxQY3kKnY1x5NHL3mbpQriOLM_hUJda2TYaXpYzUzcrxxfHJ6grhH7OJnl2q3sWca4SrQ/exec'

  const handleSubmit = async (isFormValid) => {
    submitted.value = true
    if (!isFormValid) {
      return
    }

    sent.value = true
    let res = await fetch(`${formUrl}?name=${state.name}&subject=${state.subject}&replyto=${state.email}&message=${state.message}`)
    let text = await res.text()
    if (text === 'success') {
      success.value = true
    } else {
      submitted.value = false
      sent.value = false
      alert('Server error. Please email us directly at ' + settings.email + '.')
    }
  }

  const settings = await useItem('settings')
  const brands = await useItems('brands')

  const imageUrl = useImage()
</script>

<template>
  <div>

    <Html class="bg-gray-100">
      <Head>
        <Title>
          {{ settings.store_name }}
        </Title>
        <Meta name="description" :content="settings.hook_description" />
        <Link rel="icon" type="image/x-icon" :href="imageUrl(settings.icon)" />
      </Head>
    </Html>

    <!-- image section -->
    <div class="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-center bg-no-repeat bg-cover relative"
      :style="`background-image: url('${imageUrl(settings.banner_image)}');`">
      <div
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-serif font-semibold absolute bottom-0 w-full p-5 sm:p-8 md:p-12 lg:p-16 xl:p-20 pt-10 sm:pt-14 md:pt-18 lg:pt-24 xl:pt-32 text-center bg-gradient-to-t from-[#000510bd] to-[#0000ff00]">
        {{ settings.banner_text }}
      </div>
    </div>

    <!-- hook section -->
    <div class="grid md:justify-center">
      <div
        class="max-w-7xl grid md:grid-cols-2 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {{ settings.hook_title }}
          </h2>
          <p class="text-gray-500 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed lg:leading-relaxed">
            {{ settings.hook_description }}
          </p>
        </div>
        <TheImage :uuid="settings.hook_image" class="rounded" />
      </div>
    </div>

    <!-- location section -->
    <div class="grid md:justify-center bg-white">
      <div
        class="max-w-7xl grid md:grid-cols-2 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">
        <div class="bg-gray-300 h-80 rounded overflow-hidden">
          <iframe class="w-full h-full border-0" loading="lazy" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" :src='settings.google_maps_embed.split(`src=\"`)[1].split(`\"`)[0]' ></iframe>
        </div>
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11 items-start">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {{ settings.location_title }}
          </h2>
          <p class="text-gray-600 pb-2 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
            {{ settings.location_description }}
          </p>
          <a :href="settings.directions_link" target="_blank">
            <Button icon="pi pi-map" class="w-full p-button" label="Get directions" />
          </a>
        </div>
      </div>
    </div>

    <!-- brands section -->
    <div class="grid justify-items-center p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-28">
      <div class="max-w-6xl w-full grid">
        <h2
          class="max-w-6xl text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
          {{ settings.brands_title }}
        </h2>
      </div>

      <div class="max-w-6xl w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 md:gap-10">
        <div v-for="brand of brands" class="bg-white rounded-lg shadow p-6 grid gap-4 text-slate-700 items-center">
          <TheImage class="rounded-xl w-full" :uuid="brand.icon" />
          <div v-if="brand.description" class="a-child-style self-end grid gap-3" v-html="brand.description"></div>
          <div v-else class="self-end">
            <p>
              {{ brand.title }}
            </p>
          </div>
        </div>
      </div>
      <h2
        class="max-w-6xl text-slate-500 font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
        {{ settings.call_to_action }}
      </h2>
    </div>

    <!-- season section -->
    <div class="bg-white grid justify-items-center p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-28">
      <div class="max-w-6xl w-full grid gap-6 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-24">
        <h2
          class="max-w-6xl text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
          {{ settings.seasonal_title }}
        </h2>
        <div class="grid gap-4 sm:gap-8 justify-center">
          <h3 class="text-gray-600 text-xl sm:text-2xl lg:text-3xl font-medium">
            {{ settings.seasonal_start }}
          </h3>
          <div
            class="bg-slate-100 rounded-lg p-6 sm:p-10 sm:px-12 max-w-6xl w-full grid gap-x-8 gap-y-2 sm:gap-y-5 justify-center sm:grid-cols-2 text-slate-600 text-lg sm:text-xl lg:text-2xl">
            <p v-for="item of settings.seasonal_items">
              {{ item.item }}
            </p>
          </div>
          <h3 class="text-gray-600 text-xl sm:text-2xl lg:text-3xl text-right font-medium">
            {{ settings.seasonal_end }}
          </h3>
        </div>
      </div>
    </div>

    <!-- services + emergency -->
    <div class="grid md:justify-center">
      <div
        class="max-w-7xl grid md:grid-cols-2 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">

        <!-- services -->
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11 order-2 md:order-1">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {{ settings.services_title }}
          </h2>
          <ul class="text-gray-500 text-lg sm:text-xl lg:text-2xl grid gap-2 sm:gap-4 list-disc list-outside pl-8">
            <li v-for="item of settings.services_items">
              {{ item.item }}
            </li>
          </ul>
        </div>
        <TheImage class="rounded order-1 md:order-2 w-full" :uuid="settings.services_image" />

        <!-- emergency -->
        <hr class="md:col-span-2 border-2 order-3">
        <TheImage class="rounded order-4" :uuid="settings.emergency_image" />
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11 order-5">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {{ settings.emergency_title }}
          </h2>
          <ul class="text-gray-500 text-lg sm:text-xl lg:text-2xl grid gap-2 sm:gap-4 list-disc list-outside pl-8">
            <li v-for="item of settings.emergency_items">
              {{ item.item }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- our story section -->
    <div class="grid md:justify-center bg-primary">
      <div
        class="max-w-7xl grid md:grid-cols-5 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">

        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11 items-start md:col-span-3">
          <h2 class="text-white font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {{ settings.story_title }}
          </h2>
          <span class="text-gray-200 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed lg:leading-relaxed grid gap-4 sm:gap-6"
            v-html="settings.story_content">
          </span>
        </div>
        <div class="grid md:col-span-2 gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11">
          <TheImage class="rounded w-full" :uuid="settings.story_image_1" />
          <TheImage class="rounded w-full" :uuid="settings.story_image_2" />
        </div>
      </div>
    </div>

    <!-- contact section -->
    <div class="grid md:justify-center">
      <div
        class="max-w-6xl grid md:grid-cols-5 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">
        <div class="grid md:col-span-2 gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11">
          <TheImage class="h-28 sm:h-32 md:h-auto md:w-full rounded" :uuid="settings.icon" />
        </div>
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11 items-start md:col-span-3">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Contact Us
          </h2>
          <div class="grid gap-3 sm:gap-4 md:gap-5">
            <span>
              <span class="p-input-icon-left w-full">
                <i class="pi pi-user" />
                <InputText type="text" placeholder="Name" class="w-full" :class="{'p-invalid':v$.name.$invalid && submitted}"
                  v-model="state.name" />
              </span>
              <small v-if="submitted && v$.name.$silentErrors.length" class="p-error">
                {{ v$.name.$silentErrors[0].$message }}
              </small>
            </span>
            <span>
              <span class="p-input-icon-left w-full">
                <i class="pi pi-envelope" />
                <InputText type="text" placeholder="Email" class="w-full" :class="{'p-invalid':v$.email.$invalid && submitted}"
                  v-model="state.email" />
              </span>
              <small v-if="submitted && v$.email.$silentErrors.length" class="p-error">
                {{ v$.email.$silentErrors[0].$message }}
              </small>
            </span>
            <span>
              <span class="p-input-icon-left w-full">
                <i class="pi pi-file" />
                <InputText type="text" placeholder="Subject" class="w-full" :class="{'p-invalid':v$.subject.$invalid && submitted}"
                  v-model="state.subject" />
              </span>
              <small v-if="submitted && v$.subject.$silentErrors.length" class="p-error">
                {{ v$.subject.$silentErrors[0].$message }}
              </small>
            </span>
            <span>
              <Textarea :autoResize="true" class="w-full" rows="5" cols="30" placeholder="Message"
                :class="{'p-invalid':v$.message.$invalid && submitted}"
                v-model="state.message" />
              <small v-if="submitted && v$.message.$silentErrors.length" class="p-error">
                {{ v$.message.$silentErrors[0].$message }}
              </small>
            </span>
            <Button v-if="!sent" label="Submit" type="submit" @click="handleSubmit(!v$.$invalid)" />
            <Button v-else-if="!success" label="Sending" icon="pi pi-spin pi-spinner" />
            <Button v-else label="Sent" icon="pi pi-check-circle" disabled="disabled" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>