import { createStore } from 'vuex'

export default createStore({
  state: {
    SelectedDarkTheme: true,
    logged_in: false,
    IsOn:false,
  },
  getters: {
    GetCurrentTheme: (state) => state.SelectedDarkTheme,
    GetOnStatus: (state) => state.IsOn,
    CheckForLoggedInUser: (state) => state.logged_in
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
