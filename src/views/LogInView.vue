<template>
<div>
  <form @submit="SignIn" class="loginform" :style="SetCssVars">
    <div class="input-group">
      <label for="Username">Username: </label>
      <input type="text" class="text-area" v-model="Model.Username" />
    </div>
    <div class="input-group">
      <label for="Password">Password: </label>
      <input type="password" class="text-area" v-model="Model.Password"/>
    </div>
    <div class="input-group">
      <input type="submit" value="Sign in" class="button"/>
    </div>
  </form>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      Model:{
        Username:'',
        Password:''
      }
    }
  },
  methods:{
    SignIn(event){
      event.preventDefault()
      if(!this.Model.Username){
        alert("Username is required to log in!")
        return
      }
      if(!this.Model.Password){
        alert("Password is required to log in!")
        return
      }
      alert("Trying to log in as " + this.Model.Username + "!")
    }
  },
  computed:{
    ...mapGetters(["GetCurrentTheme"]),
    SetCssVars(){
      return {
        "--first-form-gradient-colour": this.GetCurrentTheme ? "#FFF4E1":"#13041e",
        "--middle-form-gradient-colour":this.GetCurrentTheme ? "#ffe8c1":"#2a0944",
        "--last-form-gradient-colour": this.GetCurrentTheme ? "#ffd48e":"#6f4293",
        "--input-accent-colour": this.GetCurrentTheme ? "#256359":"#A10035"
      }
    }
  }
}
</script>

<style scoped>
.loginform{
  /* background-color: var(--first-form-gradient-colour); */
  background: linear-gradient(180deg, var(--first-form-gradient-colour) 0%, var(--middle-form-gradient-colour) 75%, var(--last-form-gradient-colour) 100%);
  margin: 0 auto;
  width: 40vw;
  gap: 2rem;
  padding: 4rem;
  border-radius: 1rem  5rem;
  display: flex;
  flex-direction: column;
  box-shadow: -33px 23px 50px 9px var(--box-shadow-section);
}
.input-group{
  font-size: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.text-area{
  margin-top:0.5rem;
  box-sizing: border-box;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: var(--main-forecolour);
  filter: brightness(150%);
  border-bottom: 0.25rem solid var(--input-accent-colour);
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 1.125rem;
}
.button{
  font-size: 1.5rem;
  padding: 1rem 0;
  border-radius:2rem;
  border:none;
  min-width: 33%;
  margin: 0 auto;
  padding: 1rem 3rem;
  background-color:var(--main-forecolour) ;
  color: var(--main-contrast-colour);
  filter: saturate(200%) hue-rotate(-10deg);
}
.button:focus,
.button:hover{
  /* background-color: var(--main-background-colour);
  color: var(--main-contrast-colour); */
  /* font-weight: bold; */
  filter: brightness(110%);
}
</style>