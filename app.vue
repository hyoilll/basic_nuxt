<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'My App',
  // <meta> タグを追加して、description として "My amazing site." という説明文を設定しています。これはSEO（検索エンジン最適化）のために使われる。
  // meta descriptionは、ページの説明を検索エンジンに提供する重要なタグです。この情報は、検索結果ページ（SERP）でページの概要として表示されることが多いです。検索エンジンはこの説明を元に、ページの内容を把握し、ユーザーに最適な結果を表示。
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  // <body> タグにクラスを追加しています。具体的には class="test" という属性が追加されます。
  bodyAttrs: {
    class: 'test'
  },
  // ページにインラインスクリプトを追加しています。このスクリプトは、ページが読み込まれた際に console.log('Hello world') を実行。
  script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
