<template>
  <nav class="navbar navbar-full navbar-light bg-faded  navbar-fixed-top">
    <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse navbar-toggleable-md" id="navbarResponsive">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <router-link class="navbar-brand" to="/"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/the_premier_league-24.png" title="The Premier League" width="24"> {{title}}</router-link>
        </li>
        <li class="nav-item" >
          <router-link class="nav-link" to="/mancity"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/manchester_city_fc-24.png" title="Manchester City FC" width="24"> Manchester City</router-link>
        </li>
        <li class="nav-item" >
          <router-link class="nav-link" to="/manu"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/manchester_united_fc-24.png" title="Manchester United FC" width="24"> Manchester United</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/chelsea"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/chelsea_fc-24.png" title="Chelsea FC" width="24"> Chelsea</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/spur"><img src="https://maxcdn.icons8.com/iOS7/PNG/25/Animals/chicken-25.png" title="Chicken" width="25"> Tottenham Hotspur</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/arsenal"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/arsenal_fc-24.png" title="Arsenal FC" width="24"> Arsenal</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/liv"><img src="https://maxcdn.icons8.com/Color/PNG/24/Logos/liverpool_fc-24.png" title="Liverpool FC" width="24"> Liverpool</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      title:'English Premier League'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
