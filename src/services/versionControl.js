// src/services/versionControl.js
import { ref } from 'vue'

export class VersionControlService {
  static instance = null
  
  constructor() {
    this.checkInterval = 60000 // 1分鐘檢查一次
    this.needsUpdate = ref(false)
    this.checking = ref(false)
    this.initVersionCheck()
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new VersionControlService()
    }
    return this.instance
  }

  initVersionCheck() {
    // 初始檢查
    this.checkVersion()

    // 定期檢查
    setInterval(() => this.checkVersion(), this.checkInterval)

    // 頁面可見性變化時檢查
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.checkVersion()
      }
    })

    // 註冊錯誤處理
    this.registerErrorHandler()
  }

  async checkVersion() {
    if (this.checking.value) return

    try {
      this.checking.value = true
      const response = await fetch('/version.json?t=' + Date.now())
      const { version } = await response.json()

      const currentVersion = localStorage.getItem('app_version')
      
      if (!currentVersion) {
        localStorage.setItem('app_version', version)
        return
      }

      if (currentVersion !== version) {
        this.needsUpdate.value = true
        this.handleVersionMismatch()
      }
    } catch (error) {
      console.error('Version check failed:', error)
    } finally {
      this.checking.value = false
    }
  }

  async handleVersionMismatch() {
    // 清除快取
    if ('caches' in window) {
      const keys = await caches.keys()
      await Promise.all(keys.map(key => caches.delete(key)))
    }

    // 發送給 Pinia store (如果你有使用的話)
    this.notifyVersionMismatch()
  }

  notifyVersionMismatch() {
    // 可以透過 Pinia 來管理全局狀態
    // const appStore = useAppStore()
    // appStore.setUpdateAvailable(true)
  }

  registerErrorHandler() {
    window.addEventListener('unhandledrejection', (event) => {
      if (event?.reason?.message?.includes('Failed to fetch dynamically imported module')) {
        this.handleVersionMismatch()
      }
    })
  }

  reloadApp() {
    window.location.reload()
  }
}

export const versionControl = VersionControlService.getInstance()