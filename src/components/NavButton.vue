<template>
    <div class="background" :class="{'dark-background':!GetCurrentTheme, 'light-background':GetCurrentTheme}">
        <div class="icon-background" v-if="Icon !== 'none'">
            <img :src="Icon" alt="">
        </div>
        <router-link v-if="Address !== ''" :to="Address">
            <div class="main-text">{{Text}}</div>
            <div class="sub-text" v-if="SubText !== ''">{{SubText}}</div>
        </router-link>
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
.background{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10vmin;
    aspect-ratio: 2;
    border-radius: 1rem 5rem 1rem 5rem;
    background-color: var(--main-contrast-colour);
}
nav a{
    color: var(--main-foreclour);
    font-size: 1.25rem;
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