<template>
    <div class="background" :class="{'dark-background':!GetCurrentTheme, 'light-background':GetCurrentTheme}">
        <router-link v-if="Address !== ''" :to="Address">
            <div class="main-text">{{Text}}</div>
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
        Text:{
            type: String,
            default: '<.. Text ..>'
        }
    }
}
</script>

<style scoped>
.background{
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    padding: 1rem 2rem;
    border-radius: 1rem 5rem 1rem 5rem;
    background-color: var(--main-contrast-colour);
}
nav a{
    color: var(--main-foreclour);
    font-size: 1.25rem;
    text-decoration: none;
}
</style>