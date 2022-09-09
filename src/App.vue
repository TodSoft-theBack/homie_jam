<template>
  <div class="wrapper" :style="SetCssVars">
    <header>
      <div class="brand_sticker">
        <img :src="require(GetCurrentTheme?'../public/Assets/Logo-dark.svg':'../public/Assets/Logo-light.svg')" alt="">
        <div class="brand_name-text">Homie<br>Jam</div>
      </div>
      <nav class="desktop">
        <NavButton Address='/' Text="Home" />
        <NavButton Address='/about' Text="About" />
        <IconNavButton v-if="CheckForLoggedInUser" :Icon ='GetCurrentTheme?"../../Assets/Notification_icon_light.svg":"../../Assets/Notification_icon_dark.svg"'/>
        <AccountInfo :Icon='!GetCurrentTheme?"../../Assets/Notification_icon_dark.svg":"../../Assets/Notification_icon_light.svg"' Address='/login' Text="Account" SubText="Log in" />
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
import IconNavButton from "./components/IconNavButton"
import AccountInfo from "./components/AccountInfo"
export default {
  computed:{
    ...mapGetters(['GetCurrentTheme', "CheckForLoggedInUser"]),
    SetCssVars(){
      return{
        "--main-forecolour":this.GetCurrentTheme? "#2A0944":"#FEC260",
        "--main-background-colour":this.GetCurrentTheme? "#13041E":"#FFF4E1",
        "--main-contrast-colour":!this.GetCurrentTheme? "#13041E":"#FFF4E1",
        "--main-green-colour":"#256359",
        "--main-red-colour":"#A10035"
      }
    }
  },
  components:{
    NavButton,
    IconNavButton,
    AccountInfo
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
  font-family: 'Averia Libre', Helvetica, Arial, sans-serif;
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
.brand_sticker{
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
  margin: 1rem;
  margin-right: 0;
  background-color: var(--main-contrast-colour);
  border-radius: 5rem 0.5rem 5rem 0.5rem;
}
.brand_sticker img{
  --size: 3.5rem;
  width: var(--size);
  height: var(--size);
}
.brand_name-text{
  margin-left: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color:var(--main-forecolour);
}
nav{
  flex: 10;
  gap: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>
