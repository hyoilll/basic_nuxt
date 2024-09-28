<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  /**
   * 各ページでuseHead({ title: pageTitle })のように設定しなければ、titleTemplateの引数はundefinedになる。
   * もし、設定したら、titleChunkに設定したtitleが渡される。
   * useHeadでも、useSeoMetaでもどっちでも設定は可能
   * @param titleChunk 
   */
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title'
  }
})
</script>
