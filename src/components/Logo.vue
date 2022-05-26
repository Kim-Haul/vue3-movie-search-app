<template>
  <RouterLink
    to="/"
    class="logo">
    BME Capstone Design.<span class="subtitle">B</span><span>FLIX</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/main.scss";

.logo{
  font-family: 'Oswald', sans-serif;
  font-size: 20px;
  color: $black;
  text-decoration: none;
  &:hover {
    color: $black;
  }
  span {
    color: red;
  }
  .subtitle {
    color:purple;
  }
}
</style>