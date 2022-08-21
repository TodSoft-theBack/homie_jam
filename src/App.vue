<template>
  <div class="wrapper" :style="SetCssVars">
    <header>
      <div class="brand_sticker" :class="{'dark-image':!GetCurrentTheme, 'light-image': GetCurrentTheme}">
        <img :src="GetCurrentTheme?'../public/Assets/Logo-dark.svg':'../public/Assets/Logo-light.svg'" alt="">
        <div class="brand_name-text">Homie<br>Jam</div>
      </div>
      <nav class="desktop">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> -->
        <NavButton Address='/' Text="Home" />
        <NavButton Address='/about' Text="About" />
        <NavButton Address='/login' Text="Account" SubText="Log in" />
      </nav>
      <nav class="mobile">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavButton from "./components/NavButton"
export default {
  computed:{
    ...mapGetters(['GetCurrentTheme']),
    SetCssVars(){
      return{
        "--main-forecolour":this.GetCurrentTheme? "#2A0944":"#FEC260",
        "--main-background-colour":this.GetCurrentTheme? "#13041E":"#FFF4E1",
      }
    }
  },
  components:{
    NavButton
  }
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
}
nav а:hover,
nav а.router-link-active,
nav а.router-link-exact-active {
    color: white;
    cursor: pointer;
}
.wrapper{
  background-color: var(--main-background-colour);
  color: var(--main-forecolour);
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
}
header{
  display: flex;
  justify-content: space-between;
}
.mobile{
  display: none;
}
.light-image{
  background-image: url("../public/Assets/Logo-background-light.svg");
}
.dark-image{
  background-image: url("../public/Assets/Logo-background-dark.svg");
}
.brand_sticker{
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  padding: 2rem;
  padding-left: 3rem;
  padding-top: 2.5rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.brand_sticker img{
  width:3rem;
}
.brand_name-text{
  margin-left: 0.5rem;
  text-align: center;
  font-size: 2rem;
  color:var(--main-forecolour);
}
nav{
  flex: 10;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>
