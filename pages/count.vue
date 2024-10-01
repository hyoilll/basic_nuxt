<script setup lang="ts">
/**
 * useState('counter') を使った複数のコンポーネントが、同じリアクティブな状態（state）を共有するということです。
 * これにより、異なるコンポーネントで useState('counter') を使っても、その値は同じ状態として管理されます。
 * つまり、1つのコンポーネントで状態を更新すれば、他のコンポーネントにもその変更が反映されます。
 * 
 * useState
 * Nuxt で グローバルに状態を共有するための方法
 * サーバーサイドでもクライアントサイドでも動作し、特定のキー（例えば 'counter'）で状態を管理
 * 
 * 状態生成コード
 * useState('key', () => {})
 * 
 * 状態取り出すコード
 * useState('key')
 */
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button class="bg-yellow-200 p-2" @click="counter++">
      +
    </button>
    <button class="bg-yellow-800 p-2" @click="counter--">
      -
    </button>
  </div>
</template>
