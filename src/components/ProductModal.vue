<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>新增產品</span>
        </h5>
        <button type="button" class="btn-close"
                data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="image" class="form-label">輸入圖片網址</label>
              <input type="text" class="form-control" id="image"
                      placeholder="請輸入圖片連結">
            </div>
            <div class="mb-3">
              <label for="customFile" class="form-label">或 上傳圖片
                <i class="fas fa-spinner fa-spin"></i>
              </label>
              <input type="file" id="customFile" class="form-control" ref="fileInput" @change="uploadFile">
            </div>
            <img class="img-fluid" alt="" :src="tempProduct.imageUrl">
            <!-- 延伸技巧，多圖 -->
            <div class="mt-5">
              <div class="mb-3 input-group" >
                <input type="url" class="form-control form-control"
                        placeholder="請輸入連結">
                <button type="button" class="btn btn-outline-danger">
                  移除
                </button>
              </div>
              <div>
                <button class="btn btn-outline-primary btn-sm d-block w-100">
                  新增圖片
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <input type="text" class="form-control" id="title" v-model="tempProduct.title"
                      placeholder="請輸入標題">
            </div>

            <div class="row gx-2">
              <div class="mb-3 col-md-6">
                <label for="category" class="form-label">分類</label>
                <input type="text" class="form-control" id="category" v-model="tempProduct.category"
                        placeholder="請輸入分類">
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">單位</label>
                <input type="text" class="form-control" id="unit" v-model="tempProduct.unit"
                        placeholder="請輸入單位">
              </div>
            </div>

            <div class="row gx-2">
              <div class="mb-3 col-md-6">
                <label for="origin_price" class="form-label">原價</label>
                <input type="number" class="form-control" id="origin_price" v-model="tempProduct.origin_price"
                        placeholder="請輸入原價">
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">售價</label>
                <input type="number" class="form-control" id="price" v-model="tempProduct.price"
                        placeholder="請輸入售價">
              </div>
            </div>
            <hr>

            <div class="mb-3">
              <label for="description" class="form-label">產品描述</label>
              <textarea type="text" class="form-control" id="description"
              v-model="tempProduct.description"
                        placeholder="請輸入產品描述"></textarea>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">說明內容</label>
              <textarea type="text" class="form-control" id="content" v-model="tempProduct.content"
                        placeholder="請輸入產品說明內容"></textarea>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="checkbox"
                        v-model="tempProduct.is_enabled"
                        :true-value="1"
                        :false-value="0"
                        id="is_enabled">
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary"
                data-bs-dismiss="modal">取消
        </button>
        <button type="button"
         class="btn btn-primary" 
         @click="handleSubmit">確認</button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted, watch } from 'vue';
import { useModal } from '../methods/modal';

const modal = ref(null)
let modalInstance = null
const tempProduct = ref({});// 內部暫存的產品數據

// 定義 props
const props = defineProps({
  product: {
    type: Object,
    default: () => ({})
  }
})

// 定義 emit
const emit = defineEmits(['update-product']);

// 監聽父組件傳入的 product 變化
watch(
  () => props.product,
  (newValue) => {
    tempProduct.value = { ...newValue }; // 使用解構賦值來創建新的物件
  },
  { deep: true } // 深度監聽
)

// 處理提交
const handleSubmit = () => {
  emit('update-product', tempProduct.value);
}


const { showModal, hideModal } = useModal(modal);

//上傳圖片
const fileInput = ref(null)
const uploadFile = async() => {

  try {
    const uploadedFile = fileInput.value.files[0];

    // 加入檔案驗證
    if (!uploadedFile) {
      alert('請選擇檔案');
      return;
    }

    // 檢查檔案類型
    if (!uploadedFile.type.match('image.*')) {
      alert('請上傳圖片檔案');
      return;
    }

    const formData = new FormData;
    formData.append('file-to-upload',uploadedFile);

    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/upload`;
    const res = await axios.post(api,formData);

    if (res.data.success) {
      tempProduct.value.imageUrl = res.data.imageUrl;
      alert('上傳成功');
      console.log(tempProduct.value);
    }else {
      // 處理上傳失敗
      alert(res.data.message || '上傳失敗');
    }

  } catch (error) {
    console.error('上傳失敗:', error);
    alert('上傳失敗，請稍後再試');
  }

}

// 暴露方法供父组件调用
defineExpose({
  showModal,
  hideModal,
  tempProduct
})
</script>