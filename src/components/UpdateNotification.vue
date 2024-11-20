// src/components/UpdateNotification.vue
<script setup>
import { watch } from 'vue'
import { versionControl } from '../services/versionControl'

const props = defineProps({
  autoUpdate: {
    type: Boolean,
    default: false
  },
  duration: {
    type: Number,
    default: 5000
  }
})

// 監聽版本變化
watch(() => versionControl.needsUpdate.value, (needsUpdate) => {
  if (needsUpdate && props.autoUpdate) {
    setTimeout(() => {
      versionControl.reloadApp()
    }, props.duration)
  }
})

const handleUpdate = () => {
  versionControl.reloadApp()
}
</script>

<template>
  <Transition name="slide-fade">
    <div v-if="versionControl.needsUpdate" 
         class="fixed bottom-4 right-4 z-50 p-4 bg-blue-500 text-white rounded-lg shadow-lg">
      <div class="flex items-center space-x-4">
        <span v-if="autoUpdate">
          網站將在幾秒後自動更新...
        </span>
        <span v-else>
          發現新版本可用
        </span>
        
        <button v-if="!autoUpdate"
                @click="handleUpdate"
                class="px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-50 transition-colors">
          立即更新
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>