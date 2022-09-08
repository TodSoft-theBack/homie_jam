<template>
    <div class="background" :class="{'dark-background':!GetCurrentTheme, 'light-background':GetCurrentTheme}">
        <img v-if="Icon !== 'none' && CheckForLoggedInUser" :src='Icon' alt="">
        <div class="text-wrapper">
            <div class="main-text">{{Text}}</div>
            <router-link v-if="Address !== '' && SubText !==''" :to="Address" class="sub-text" >
                {{SubText}}
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['GetCurrentTheme', 'CheckForLoggedInUser'])
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
    gap: 1rem;
    width: max-content;
    padding: 1rem 2.5rem;
    border-radius: 1rem 5rem 1rem 5rem;
    background-color: var(--main-contrast-colour);
}
.main-text{
    font-size: 1.75rem;
}
.text-wrapper{
    text-align: center;
}
nav a{
    color: var(--main-foreclour);
    font-size: 1.5rem;
    text-decoration: none;
}
.background img{
    width: 5rem;
    height: 4rem;
    border-radius: 0.5rem 2rem 0.5rem 2rem;
    border: 5px solid var(--main-background-colour);
}
.sub-text{
    font-size: 1rem;
    filter: brightness(75%);
}
</style>