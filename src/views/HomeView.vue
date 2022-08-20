<template>
  <section :style="SetCssVars">
      <div class="tittle">
        <div class="tittle_text">
          Tired of taking all the responisibilities?<br><br>
          Share them with <span class="brand_name">HomieJam</span>!
        </div>
      </div>
    <!-- <img src="../../public/Assets/SectionDivider.svg" class="section_divider"/> -->
    <div class="section_divider"></div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'HomeView',
  computed:{
    ...mapGetters(['GetCurrentTheme']),
    SetCssVars(){
      return{
        "--tittle-colour":!this.GetCurrentTheme? "#13041ebf":"#205147b2",
        "--divider-colour":!this.GetCurrentTheme? "#2a094499":"#CB995B99",
        "--text-forecolour":!this.GetCurrentTheme? "#FFF4E1":"#13041E",
        "--brand-name-forecolour": "#FEC260",
        "--box-shadow-tittle":!this.GetCurrentTheme? "#ffffff4a":"#13041e99",
        "--box-shadow-section":!this.GetCurrentTheme? "#00000099":"#fff4e160",
        "--box-shadow-divider":!this.GetCurrentTheme? "#00000099":"#13041e99"
      }
    }
  },
  components: {
  }
}
</script>

<style scoped>
.tittle_text{
  width: 70%;
  margin: 0 auto;
}
.tittle{
  margin-top: 5vh;
  font-size: 3rem;
  padding: 1.5rem 3rem;
  width: 70vw;
  min-height: 100%; 
  color: var(--text-forecolour);
  text-align: center;
  background-color: var(--tittle-colour);
  backdrop-filter: blur(50px);
  border-radius:  2rem 2rem 10rem 10rem;
  box-shadow: -11px 15px 20px var(--box-shadow-tittle);
}
.brand_name{
  color: var(--brand-name-forecolour);
}
section{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 100vh;
  background-image: url("../../public/Assets/SectionBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover, 150%;
  box-shadow: -33px 23px 50px 9px var(--box-shadow-section);
}
.section_divider{
  --divider-height: 15vh;
  width: 40vw;
  height: var(--divider-height);
  position: relative;
  background-color: var(--divider-colour);
  box-shadow: -10px 14px 16px var(--box-shadow-divider);
  backdrop-filter: blur(50px);
  border-radius:  2rem 2rem 10rem 10rem;
  bottom: calc((var(--divider-height)/2)*-1);
}
</style>