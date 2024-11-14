import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import emitter from '@/methods/emitter';

export const useCounterStore = defineStore('counter', () => {
  //千分號
  function currency(num) {
    const n = parseInt(num, 10);
    return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
  }
  //時間轉換
  function date(time) {
    const localDate = new Date(time * 1000);
    return localDate.toLocaleDateString();
    }
  //更新訊息提示
  function pushMessageState(response, title = '更新') {
    if (response.data.success) {
      emitter.emit('push-message', {
        style: 'success',
        title: `${title}成功`,
      });
    } else {
      // 有些訊息是字串，有些則是陣列，在此統一格式
      const message = typeof response.data.message === 'string'
        ? [response.data.message] : response.data.message;
      emitter.emit('push-message', {
        style: 'danger',
        title: `${title}失敗`,
        content: message.join('、'),
      });
    }
  }

  return { 
    currency, 
    date, 
    pushMessageState,
  }
})
