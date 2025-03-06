<template>
  <div class="about">
    <h1>About</h1>
    <p>This is the about page</p>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  margin-top: 2rem;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>