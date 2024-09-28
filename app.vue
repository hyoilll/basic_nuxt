<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
/**
 * useSeoMeta は、useHead の代替として使うことができる。
 * SEOメタタグ の定義に特化しており、簡潔に設定できるよう設計されている。
 * また、TypeScript のサポートも強化されており、オブジェクト形式でタグを定義するため、間違いを防ぐgことができる。
 */
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
