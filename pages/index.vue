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

  const tailwind = useTailwind()

</script>

<template>
  <div>

    <Html class="bg-gray-100">

    <Head>
      <Title>
        Home
      </Title>
    </Head>

    </Html>

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
        class="max-w-7xl grid md:grid-cols-2 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Shop Local
          </h2>
          <p class="text-gray-500 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed lg:leading-relaxed">
            Goldberg Hardware is your classic smalltown hardware store with stocked shelves, seasonal items, a wide selection of tools and
            products for homeowners and general contractors, and the kind of excellent customer service that makes you smile every time you
            shop here.
          </p>
        </div>
        <div class="bg-gray-300 h-96 rounded"></div>
      </div>
    </div>

    <!-- location section -->
    <div class="grid md:justify-center bg-white">
      <div
        class="max-w-7xl grid md:grid-cols-2 p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-7 sm:gap-10 md:gap-14 lg:gap-16 xl:gap-20 items-start">
        <div class="bg-gray-300 h-80 rounded"></div>
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11 items-start">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Location
          </h2>
          <p class="text-gray-600 pb-2 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
            We are located at 63 Main Street in Tarrytown, two blocks down from the Music Hall and 7-Eleven.
          </p>
          <Button icon="pi pi-map" class="p-button" label="Get directions" />
        </div>
      </div>
    </div>

    <!-- products section -->
    <div class="grid justify-items-center p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-28">
      <div class="max-w-6xl w-full grid">
        <h2
          class="max-w-6xl text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
          We carry all your favorite brands
        </h2>
      </div>

      <div class="max-w-6xl w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 md:gap-10">
        <div v-for="item of [0, 1, 2, 3, 4, 5, 6, 7]" class="bg-white rounded-lg shadow p-6 grid gap-3 text-slate-700">
          <div class="w-full h-20 bg-gray-300 rounded-xl"></div>
          <p>Stop in and view our large new display of Benjamin Moore colors and let us help you find the right paint for your job today.
          </p>
        </div>
      </div>
      <h2
        class="max-w-6xl text-slate-500 font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">
        Call or stop by to see what's in stock!
      </h2>
    </div>

    <!-- season section -->
    <div class="bg-white grid justify-items-center p-8 sm:p-12 md:p-16 lg:p-24 xl:p-28 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-28">
      <div class="max-w-6xl w-full grid gap-6 sm:gap-10 md:gap-14 lg:gap-20 xl:gap-24">
        <h2
          class="max-w-6xl text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
          Are you ready for spring and summer?
        </h2>
        <div class="grid gap-4 sm:gap-8 justify-center">
          <h3 class="text-gray-600 text-xl sm:text-2xl lg:text-3xl font-medium">
            We carry...
          </h3>
          <div
            class="bg-slate-100 rounded-lg p-6 sm:p-10 sm:px-12 max-w-6xl w-full grid gap-x-8 gap-y-2 sm:gap-y-5 justify-center sm:grid-cols-2 text-slate-600 text-lg sm:text-xl lg:text-2xl">
            <p>Grass seed and lawn fertilizer</p>
            <p>Vegetable and flower seeds</p>
            <p>Bird seed and feeders</p>
            <p>Brown paper lawn bags</p>
            <p>Garden hoses and nozzles</p>
            <p>Watering cans</p>
            <p>Sprinklers</p>
            <p>Garden rakes and edge clippers</p>
            <p>Tree saws</p>
            <p>Wheel barrels</p>
            <p>Mailboxes</p>
          </div>
          <h3 class="text-gray-600 text-xl sm:text-2xl lg:text-3xl text-right font-medium">
            ...and more!
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
            Our Services
          </h2>
          <ul class="text-gray-500 text-lg sm:text-xl lg:text-2xl grid gap-2 sm:gap-4 list-disc list-outside pl-8">
            <li>Key cutting</li>
            <li>Paint color matching</li>
            <li>Free assembly with purchase a Weber grill (local delivery available)</li>
            <li>Window screen rescreening</li>
            <li>Gift Certificates</li>
          </ul>
        </div>
        <div class="bg-gray-300 h-96 rounded order-1 md:order-2"></div>

        <!-- emergency -->
        <hr class="md:col-span-2 border-2 order-3">
        <div class="bg-gray-300 h-96 rounded order-4"></div>
        <div class="grid gap-4 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-11 order-5">
          <h2 class="text-primary font-serif font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Emergency Preparedness
          </h2>
          <ul class="text-gray-500 text-lg sm:text-xl lg:text-2xl grid gap-2 sm:gap-4 list-disc list-outside pl-8">
            <li>Flashlights</li>
            <li>Batteries</li>
            <li>Sump pumps</li>
            <li>Firewood</li>
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
            Our Story
          </h2>
          <span class="text-gray-200 text-lg sm:text-xl lg:text-2xl sm:leading-relaxed lg:leading-relaxed grid gap-4 sm:gap-6">
            <p>
              Goldberg Hardware is your classic small town hardware store with fully stocked shelves, seasonal items, a wide selection of
              tools and products for homeowners and professionals, and the excellent customer service you deserve.
            </p>
            <p>
              Goldberg Hardware has been servicing the community since 1904. I purchased the store in 1998, after having worked here since I
              was a child. My team has been with the store for decades as well. We are your neighbors, and we care about the people in this
              close-knit community.
            </p>
            <p>
              There are so many reasons to shop at Goldberg Hardware. You may come in initially for the convenience but will surely come
              back
              after you see the level of service you receive. My customers are often amazed by the selection and competitive pricing. Please
              stop by and introduce yourself.
            </p>
            <p>
              Gregg Goldberg
              <br>
              Owner
            </p>
          </span>
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