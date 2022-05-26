<template>
  <div class="container">
    <h1>
      <span class="subtitle">B</span><span>FLIX</span>: What is your favorite movie?
    </h1>

    <p>
      Please fill in the blanks below, if you would like to search movie.
    </p> 
  </div>
</template>


<style lang="scss" scoped>
@import "~/scss/main.scss";

.container {
  padding-top: 40px;
  
}
h1 {
  line-height: 1;
  font-family: 'Oswald', sans-serif;
  font-size: 80px;

  span{
    color: red;
  }

  .subtitle{
    color: purple;
  }
}

p {
  margin: 30px 0;
  color: $gray-600;
}
</style>