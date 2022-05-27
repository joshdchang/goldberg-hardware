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
  const handleSubmit = (isFormValid) => {
    submitted.value = true;
    if (!isFormValid) {
      return;
    }
    alert();
  }

</script>

<template>
  <div>

    <Html class="bg-gray-100">

    </Html>

    <!-- title section -->
    <div class="p-6 sm:p-8 md:p-10 lg:p-12 flex justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
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

    <!-- image section -->
    <div class="aspect-video w-full max-h-[70vh] bg-center bg-no-repeat bg-cover relative" style="background-image: url('/front.png');">
      <div
        class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-serif font-semibold absolute bottom-0 w-full p-5 sm:p-8 md:p-12 lg:p-16 xl:p-20 pt-10 sm:pt-14 md:pt-18 lg:pt-24 xl:pt-32 text-center bg-gradient-to-t from-[#000000bd] to-[#00000000]">
        Family owned and operated since 1904
      </div>
    </div>

    <!-- hook section -->
    <div class="grid md:justify-center">
      <div
        class="max-w-6xl grid md:grid-cols-2 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Shop Local
          </h2>
          <p class="text-gray-500 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed lg:leading-relaxed">
            Goldberg Hardware is your classic smalltown hardware store with stocked shelves,seasonal items,a wide selection of tools and
            products for homeowners and general contractors, and the kind of excellent customer service that makes you smile every time you
            shop here. Now offering Benjamin Moore paints!
          </p>
        </div>
        <div class="bg-gray-300 h-96 rounded"></div>
      </div>
    </div>

    <!-- location section -->
    <div class="grid md:justify-center bg-white">
      <div
        class="max-w-6xl grid md:grid-cols-2 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">
        <div class="bg-gray-300 h-80 rounded"></div>
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11 items-start">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Location
          </h2>
          <p class="text-gray-600 pb-2 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
            We are located at 63 Main Street in Tarrytown, two blocks down from the Music Hall and 7-Eleven.
          </p>
          <Button class="p-button" label="Get directions" />
        </div>
      </div>
    </div>

    <!-- products section -->
    <div class="grid justify-items-center p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-28">
      <div class="max-w-6xl w-full grid">
        <h2
          class="max-w-6xl text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
          We carry all your hardware needs
        </h2>
      </div>

      <div class="max-w-6xl w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 md:gap-10">
        <div v-for="item of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]" class="bg-white h-60 rounded-lg shadow"></div>
      </div>
    </div>

    <!-- season section -->

    <!-- our story section -->
    <div class="grid md:justify-center bg-primary">
      <div
        class="max-w-6xl grid md:grid-cols-5 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">

        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11 items-start md:col-span-3">
          <h2 class="text-white font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Our Story
          </h2>
          <p class="text-gray-200 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed lg:leading-relaxed">
            Goldberg Hardware is your classic small town hardware store with fully stocked shelves, seasonal items, a wide selection of
            tools and products for homeowners and professionals, and the excellent customer service you deserve.
          </p>
          <p class="text-gray-200 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed lg:leading-relaxed">
            Goldberg Hardware has been servicing the community since 1904. I purchased the store in 1998, after having worked here since I
            was a child. My team has been with the store for decades as well. We are your neighbors, and we care about the people in this
            close-knit community.
          </p>
          <p class="text-gray-200 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed lg:leading-relaxed">
            There are so many reasons to shop at Goldberg Hardware. You may come in initially for the convenience but will surely come back
            after you see the level of service you receive. My customers are often amazed by the selection and competitive pricing. Please
            stop by and introduce yourself.
          </p>
        </div>
        <div class="grid md:col-span-2 gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11">
          <div class="bg-gray-400 h-80 rounded"></div>
          <div class="bg-gray-400 h-80 rounded"></div>
        </div>
      </div>
    </div>

    <!-- contact section -->
    <div class="grid md:justify-center">
      <div
        class="max-w-6xl grid md:grid-cols-5 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">
        <div class="grid md:col-span-2 gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11">
          <img src="/icon.png" class="h-28 sm:h-32 md:h-auto md:w-full rounded">
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
            <Button label="Submit" type="submit" @click="handleSubmit(!v$.$invalid)" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>