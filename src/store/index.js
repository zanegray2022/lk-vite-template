import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'main-store',
        storage: localStorage
      }
    ]
  }
})