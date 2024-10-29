import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min, max, numeric, confirmed } from '@vee-validate/rules';  // 明確引入需要的規則
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue'
import router from './router'

// 明確註冊需要使用的規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
defineRule('numeric', numeric);
defineRule('confirmed', confirmed);
defineRule('phone', (value) => {
  // 手機: 09開頭，共10碼
  // 市話: 區碼(2-4碼) + 電話號碼(6-8碼)，總長度8-10碼
  const mobileRegex = /^09\d{8}$/;
  const telRegex = /^0\d{1,3}\d{6,8}$/;
  
  if (!value) {
    return '請輸入電話號碼';
  }
  
  // 移除所有空格和特殊字符
  const cleanValue = value.replace(/[\s-()]/g, '');
  
  if (!mobileRegex.test(cleanValue) && !telRegex.test(cleanValue)) {
    return '請輸入正確的電話號碼格式';
  }
  
  return true;
});
// 根據需求添加其他規則
  
// vee-validate 的配置
configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale('zh_TW');

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

// 全域註冊元件
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app')
