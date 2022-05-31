<script setup>
  const directusUrl = useUrl()
  const settings = await useItem('settings')
</script>
<template>
  <div class="bg-white grid justify-items-center p-10 sm:p-12 md:p-14 lg:p-16">
    <div class="max-w-6xl w-full grid">
      <div
        class="grid sm:grid-cols-2 text-center gap-12 md:gap-12 lg:gap-16 xl:gap-20">
        <div class="sm:text-left grid gap-6">
          <h3 class="font-serif font-bold text-2xl sm:text-3xl text-primary">
            {{ settings.store_name }}
          </h3>
          <div class="text-gray-500 grid gap-2">
            <p>
              {{ settings.hours_description }}
            </p>
            <p>
              {{ settings.address }}
            </p>
            <p>
              {{ settings.phone_number }}
            </p>
            <p>
              {{ settings.email }}
            </p>
          </div>
        </div>
        <div class="sm:text-right grid gap-6">
          <span>
            <a :href="settings.facebook_link" target="_blank">
              <Button icon="pi pi-facebook" label="Like Us on Facebook" class="p-button-info p-button-lg p-button-outlined" />
            </a>
          </span>
          <span>
            <a :href="directusUrl" target="_blank">
              <Button icon="pi pi-lock" label="Admin Login" class="p-button-sm p-button-outlined" />
            </a>
          </span>
          <small class="text-gray-500 self-end pt-4">
            Copyright © {{ new Date().getFullYear() }} {{ settings.store_name }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>