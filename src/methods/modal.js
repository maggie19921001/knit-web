import { ref, onMounted } from 'vue';
import Modal from 'bootstrap/js/dist/modal';

export function useModal(modalRef) {
  const modalInstance = ref(null);

  onMounted(() => {
    modalInstance.value = new Modal(modalRef.value);
  });

  const showModal = () => {
    if (modalInstance.value) {
      modalInstance.value.show();
    }
  };

  const hideModal = () => {
    if (modalInstance.value) {
      modalInstance.value.hide();
    }
  };

  return {
    showModal,
    hideModal
  };
}
