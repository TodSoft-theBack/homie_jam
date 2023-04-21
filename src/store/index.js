import { createStore } from 'vuex'

function IsDayTime() {
  const hours = (new Date()).getHours();
  return (hours >= 6 && hours < 18);
}

function CurrentTheme(){
  return !IsDayTime();
}

export default createStore({
  state: {
    CurrentTheme: CurrentTheme(),
    logged_in: false,
    IsOn:false,
  },
  getters: {
    GetCurrentTheme: (state) => state.CurrentTheme,
    GetOnStatus: (state) => state.IsOn,
    CheckForLoggedInUser: (state) => state.logged_in
  },
  mutations: {
    ChangeTheme: (state) => state.CurrentTheme = !state.CurrentTheme,
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
  modules: 
  {
    
  }
})
