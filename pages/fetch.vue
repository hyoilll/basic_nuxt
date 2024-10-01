<template>
  <section>
    <div class="flex gap-3">
      <h1>User Data</h1>
      <button type="button" @click="fetchData" class="border bg-yellow-200">fetch</button>
    </div>

    <!-- データ取得中のローディング表示 -->
    <div v-if="pending">Loading...</div>

    <!-- エラー発生時のエラーメッセージ表示 -->
    <div v-if="error">Error: {{ error.message }}</div>

    <!-- データ取得成功時の表示 -->
    <ul v-if="data">
      <li v-for="user in data" :key="user.id">{{ user.name }}</li>
    </ul>
  </section>
</template>

<script setup>
// useFetch を使ってAPIからデータを取得
const { data, pending, error, execute } = useFetch('https://jsonplaceholder.typicode.com/users', {
  // immediate: false, // 手動でfetchしたい時に、つまり、ページレンダリング時に実行されないように。
  lazy: true // fetchをクライアント側で行われることになり、fetchが終わることを待たない。またないので、fetchの状態管理に基づいて管理する必要がある。例えば、pending状態にはどうするとか。fetchが終わったらどうするとか。
})

const fetchData = () => {
  execute()
}
</script>
