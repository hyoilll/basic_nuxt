<template>
  <section>
    <p>This page will be displayed at the /post/{{ routeId }} route.</p>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute()
const routeId = route.params.id
</script>