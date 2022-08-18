import { createStore } from 'vuex'

export default createStore({
  state: {
    SelectedDarkTheme: true,
  },
  getters: {
    GetCurrentTheme: (state) => state.SelectedDarkTheme
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
