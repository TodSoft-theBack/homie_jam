<template>
  <form action="" method="post">
    <div>
      <label for="username">Username: </label>
      <input type="text" class="text-area" v-model="username"/>
    </div>
    <div>
      <label for="password">Password: </label>
      <input type="password" class="text-area" v-model="password"/>
    </div>
    <input type="submit" value="Sign in" class="button"/>
  </form>
</template>

<script>
export default {

}
</script>

<style scoped>
.text-area{
  margin-top:0.5rem;
  box-sizing: border-box;
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: var(--main-forecolour);
  filter: brightness(150%);
  border-bottom: 0.25rem solid red;
}
form{
  font-size: 1rem;
  background-color:var(--main-contrast-colour);
  margin: 0 auto;
  width: 33vw;
  gap: 1rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
}
.button{
  font-size: 1.5rem;
  padding: 1rem 0;
  background-color: var(--main-background-colour);
  color: var(--main-contrast-colour)
}
.button:focus{
  background-color: var(--main-forecolour);
  color: var(--main-contrast-colour);
}
.button:hover{
  background-color: var(--main-forecolour);
  color: var(--main-contrast-colour);
}
</style>