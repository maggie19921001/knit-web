<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="showModal">
      增加一個產品
    </button>
  </div>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Modal from 'bootstrap/js/dist/modal';


const modal = ref(null); // 用來存取 DOM 元素
let modalInstance = null; // 保存 Modal 實例

const showModal = () => {
  if (modalInstance) {
    modalInstance.show();
  }
};

const hideModal = () => {
  if (modalInstance) {
    modalInstance.hide();
  }
};

onMounted(() => {
  modalInstance = new Modal(modal.value); // 初始化 Modal
});
</script>