<template>
  <div class="app">
    <nav class="pa4 pl0">
      <a class="link dim black b f6 f5-ns dib mr3" href="/" title="Home">Speaker Info</a>
      <router-link  class="link dim gray    f6 f5-ns dib mr3" to="/">Info</router-link>
      <router-link  class="link dim gray    f6 f5-ns dib mr3" to="/talks">Talks</router-link>
      <router-link  class="link dim gray    f6 f5-ns dib mr3" to="/videos">Videos</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 80%;
  margin: auto;
  font-size: 15px;
  line-height: 1.5;
}

@media only screen 
  and (min-width: 320px) 
  and (max-width: 700px){
    nav{
      text-align: center;
      font-weight: bold;
      padding-left: 50%;
    }
  }
</style>
