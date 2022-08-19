<template>
    <div class="switch" :class="{round:IsRound, On:GetOnStatus}" @click="ToggleStatus()" :style="SetCssVars">
        <div class="slider" :class="{round:IsRound, Toggle:GetOnStatus}"></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:"Switch_toggle",
    props:{
        OnColour: String,
        OffColour: String,
        MainColour: String,
        TogglePadding:{
            type: Number,
            default: 5
        },
        ToggleSize:{
            type: Number,
            default: 30
        },
        IsRound: {
            type: Boolean,
            default: true
        }
    },
    methods:{
        ...mapActions(["ToggleStatus"])
    },
    computed:{
        ...mapGetters(["GetOnStatus"]),
        SetCssVars()
        {
            return{
                '--OnColour':this.OnColour,
                '--OffColour':this.OffColour,
                '--MainColour':this.MainColour,
                '--toggle-padding':this.TogglePadding,
                '--toggle-size':this.ToggleSize
            }
        }
    }
}
</script>

<style scoped>
.switch{
    background-color: var(---OffColour);
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
    width: calc(50% - var(--toggle-padding)*1px);
    height: calc(100% - var(--toggle-padding)*2px);
    top: calc(var(--toggle-padding)*1px);
    left: calc(var(--toggle-padding)*1px);
    transition: left 0.5s ease-in-out;
  }
  .round{
    border-radius: calc(var(--toggle-size)*1px);
  }
</style>