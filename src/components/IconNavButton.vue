<template>
    <div class="background" :class="{'dark-background':!GetCurrentTheme, 'light-background':GetCurrentTheme}">
        <img v-if="Icon !== 'none'" :src='Icon' alt="">
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['GetCurrentTheme'])
    },
    props:{
        Icon:{
            type: String,
            default: 'none'
        }
    }
}
</script>

<style scoped>
.background{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: max-content;
    padding: 1rem 2rem;
    border-radius: 1rem 5rem 1rem 5rem;
    background-color: var(--main-contrast-colour);
}

.background img{
    width: 2rem;
    height: 2rem;
}
</style>