import { defineStore } from 'pinia'

export const useStore = defineStore('localStorage', {
  state: () => ({
    todoList: {
      // done: false,
      // delete: false,
      // title: 'testTitle',
      // color: '2',
      // date: '4/25 11:35',
      // ID: '1650857747331'
    }
  }),
  actions: {
    // increment () {
    //   this.count++
    // }
  },
  getters: {
  }
})
