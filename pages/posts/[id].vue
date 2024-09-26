<template>
  <section>
    <p>This page will be displayed at the /post/{{ routeId }} route.</p>
  </section>
</template>

<script lang="ts" setup>
const route = useRoute()
const routeId = route.params.id

definePageMeta({
  // ページごとにルートの検証を行う
  validate: async (route) => {
    /**
     * ページが表示される前に、そのルートが有効かどうかをチェックする
     * false を返すと、そのページは表示されず、Nuxtは次のマッチングを試みます。それでも適切なページが見つからない場合、404エラーページが表示されます。
     * 「Nuxtは次のマッチングを試みます」とは、NuxtがそのURLに対して別のページが適合しないかどうかを確認することを意味します。
     * 例えば、/posts/1の場合には1が数字なので、問題なくvalidateがtrueになって、ページが表示される。一方、/posts/testの場合にはtestが数字ではないので、validateがfalseになり、ページが表示されない。
     * よって、nuxtはここで諦めるのではなく、/posts/testのルートが本当にあるかどうか試みる。もし、存在してたら/posts/testのコンポーネントをレンダリングする。
     * しかし、存在してなかったら、そのまま404エラーを表示する。
     */
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id) // Check if the id is made up of digits
  }
})
</script>