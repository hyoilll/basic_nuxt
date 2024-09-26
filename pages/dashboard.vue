<template>
  <h1>Welcome to your dashboard</h1>
</template>

<script setup lang="ts">
// auth　middlewareを指定することによって、dashboardコンポーネントにアクセス（ルート変更時）に自動的にmiddleware/auth.tsのdefineNuxtRouteMiddleware()が呼ばれる。
definePageMeta({
  middleware: 'auth'
})
</script>
