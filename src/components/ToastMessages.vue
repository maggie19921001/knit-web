<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import Toast from '@/components/Toast.vue'

const messages = ref([])

const emitter = inject('emitter')

// 監聽消息事件
onMounted(() => {
  emitter.on('push-message', (message) => {
    const { style = 'success', title, content } = message
    //JavaScript 的解構賦值語法，從 message 物件中提取 style、title 和 content 屬性。如果 message 中沒有 style，則預設為 'success'。
    messages.value.push({ style, title, content })
  })
})
</script>