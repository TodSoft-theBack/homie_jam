<template>
  <div class="frame" :class="{ 'dark': GetCurrentTheme, 'light': !GetCurrentTheme }">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <Switch OnColour="#256359" OffColour="#FFF4E1" MainColour="#FEC260" />
  </div>
</template>

<script>
import Switch from './components/Switch'
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: mapGetters(["GetCurrentTheme"]),
  methods:{
    ...mapActions(['ToggleTheme'])
  },
  components:{
    Switch
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #256359;
  min-height: 100vh;
  --logo-url: url("../public/favicon.ico");
}
.frame{
  width: 100vw;
  min-height: 100vh;
}
nav a {
  font-weight: bold;
  color: #FEC260;
}

nav a.router-link-exact-active {
  color: #256359;
}

.dark{
  --logo-url:url("../public/img/icons/favicon-16x16.png");
  background-color: #13041E;
  color: #FEC260;
}
.light{
  --logo-url:url("../public/img/icons/favicon-16x16.png");
  background-color: #FFF4E1;
  color: #2A0944;
}
</style>
