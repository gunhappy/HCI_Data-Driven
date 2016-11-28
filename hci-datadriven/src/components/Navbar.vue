<template>
  <nav class="navbar navbar-dark bg-primary bg-faded">
    <router-link to="/"><a href="#" class="navbar-brand">{{title}}</a></router-link>
    <ul class="nav navbar-nav">
      <li class="nav-item" >
        <router-link to="/"><a class="nav-link" href="#">Current Price</a></router-link>
      </li>
      <li class="nav-item" >
        <router-link to="/monthly"><a class="nav-link" href="#">Graph Monthly</a></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/yearly"><a class="nav-link" href="#">Graph Yearly</a></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      title:'Gold Price'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
