<template>
    <div class="switch" :class="{'round':IsRound, 'On':GetOnStatus}" @click="ToggleStatus(), ToggleTheme()" :style="SetCssVars">
        <div class="slider" :class="{'round':IsRound, 'Toggle':GetOnStatus}"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:"Switch_toggle",
    props:{
        OnColour:{
            type: String,
            default: "#256359"
        },
        OffColour: {
            type: String,
            default: "#FFF4E1"
        },
        MainColour: {
            type: String,
            default: "#FEC260"
        },
        ToggleSize:{
            type: Number,
            default: 24
        },
        IsRound: {
            type: Boolean,
            default: true
        }
    },
    methods:{
        ...mapActions(["ToggleStatus", 'ToggleTheme'])
    },
    computed:{
        ...mapGetters(["GetOnStatus"]),
        SetCssVars()
        {
            return{
                '--OnColour':this.OnColour,
                '--OffColour':this.OffColour,
                '--MainColour':this.MainColour,
                '--toggle-size':this.ToggleSize
            }
        }
    }
}
</script>

<style scoped>
.switch{
    border-radius: calc(var(--toggle-size)*0.1px);
    background-color: var(--OffColour);
    width: calc(var(--toggle-size)*2px);
    height: calc(var(--toggle-size)*1px);
  }
  .On{
    background-color: var(--OnColour)!important;
  }
  .Toggle{
    left: calc(var(--toggle-size)*1px)!important;
  }
  
  .slider{
    position: relative;
    background-color: var(--MainColour);
    width: calc(50% - var(--toggle-size)*0.1px);
    height: calc(100% - var(--toggle-size)*0.2px);
    top: calc(var(--toggle-size)*0.1px);
    left: calc(var(--toggle-size)*0.1px);
    border-radius: calc(var(--toggle-size)*0.1px);
    transition: left 0.5s ease-in-out;
  }
  .round{
    border-radius: calc(var(--toggle-size)*1px);
  }
</style>