<script setup>
/**
 * アプリケーションの状態はすぐに使える同期的な値で初期化できますが、
 * データが非同期に解決される場合（例えば、APIからのデータ取得が必要な場合）、
 * その初期化が難しくなります。Nuxt では、アプリケーション全体の状態を初期化するために useState を使用しますが、
 * この初期化はサーバーサイドで行われることもあるため、非同期処理をうまく扱う必要があります。
 */

// グローバルなカウンター状態を管理するためのuseState
const counter = useState('counter', () => 0)

// 非同期でデータをフェッチして状態を初期化
const initializeCounter = async () => {
  const data = await fetchCounterData() // ここで非同期にデータを取得
  counter.value = data.counter // データを使って状態を更新
}

// callOnceを使って、initializeCounterを一度だけ実行
callOnce(initializeCounter)
</script>

<template>
  <div>{{ counter }}</div>
</template>

<script>
// 非同期にデータを取得するダミー関数
async function fetchCounterData() {
  // 実際にはAPIリクエストをここで行う
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ counter: 42 })
    }, 1000)
  })
}
</script>
