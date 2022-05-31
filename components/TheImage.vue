<script setup>
  const imageUrl = useImage()
</script>
<template>
  <img :src="imageUrl($attrs.uuid)">
</template>