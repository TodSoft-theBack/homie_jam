<template>
    <div class="container">
        <div class="background" :class="{'dark-background':!GetCurrentTheme, 'light-background':GetCurrentTheme, 'coloumn':Icon != 'none'}">
            <div class="icon-background" v-if="Icon != 'none'">
                <img src="../../public/Assets/Logo-dark.svg" alt="">
            </div>
            <router-link v-if="Address !== ''" :to="Address">
                <div class="main-text">{{Text}}</div>
                <div class="sub-text" v-if="SubText !== ''">{{SubText}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['GetCurrentTheme'])
    },
    props:{
        Address:{
            type: String,
            default: ''
        },
        Icon:{
            type: String,
            default: 'none'
        },
        Text:{
            type: String,
            default: '<.. Text ..>'
        },
        SubText:{
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.light-background{
  background-image: url("../../public/Assets/NavigationButtonBackgroundLight.svg");
}
.dark-background{
  background-image: url("../../public/Assets/NavigationButtonBackgroundDark.svg");
}
.container{
    display: flex;
    justify-content: right;
}
.background{
    display: flex;
    justify-content: right;
    height: max-content;
    aspect-ratio: 2;
    padding: 1rem 1rem 3.5rem 3.5rem;
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
}
nav a{
    color: var(--main-foreclour);
    font-size: 1.85rem;
    text-decoration: none;
}

.icon-background{
    display: flex;
    justify-content: right;
    height: fit-content;
    padding: 1rem;
    background-repeat: no-repeat;
    background-position: top right;
    background-size: contain;
}
.column{
    display: flex;
}
</style>