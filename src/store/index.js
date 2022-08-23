import { createStore } from 'vuex'

export default createStore({
  state: {
    SelectedDarkTheme: false,
    IsOn:false
  },
  getters: {
    GetCurrentTheme: (state) => state.SelectedDarkTheme,
    GetOnStatus: (state) => state.IsOn
  },
  mutations: {
    ChangeTheme: (state) => state.SelectedDarkTheme = !state.SelectedDarkTheme,
    ChangeStatus: (state) => state.IsOn = !state.IsOn
  },
  actions: {
    ToggleTheme({commit}){
      commit('ChangeTheme')
    },
    ToggleStatus({commit}){
      commit('ChangeStatus')
    }
  },
  modules: {
  }
})
