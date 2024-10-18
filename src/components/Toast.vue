<template>
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toastRef">
        <div class="toast-header">
            <span :class="`bg-${msg.style}`" class="p-2 rounded me-2 d-inline-block"></span>
        <strong class="me-auto">{{msg.title}}</strong>
        <small>11 mins ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            {{ msg.content }}
        </div>
    </div>
</template>

<script setup>
import Toast from 'bootstrap/js/dist/toast';
import { ref, onMounted } from "vue";

const props = defineProps({
  msg: {
    type: Object,
    required:true
  }
});

const toastRef = ref(null)

onMounted(() => {
  const toast = new Toast(toastRef.value, {
    delay: 6000
  })
  toast.show()
})

// defineExpose({
//   toast
// });

</script>

