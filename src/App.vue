<template>
  <div id="app">
    <navbar></navbar>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Navbar,Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  padding-top: 70px;
}
</style>
